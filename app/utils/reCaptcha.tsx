import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  ForwardRefRenderFunction,
  Suspense,
  lazy,
} from "react";

const ReCAPTCHA = lazy(() => import("react-google-recaptcha"));

const Loading = () => {
  return (
    <svg
      className="animate-spin h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}

type ReCaptchaFieldProps = {
  onVerify?: (token: string) => void;
  onError?: (message: string) => void;
  className?: string;
  props?: React.ComponentProps<typeof ReCAPTCHA>;
};

export type ReCaptchaFieldHandle = {
  getValue: () => string | null | undefined;
  reset: () => void;
  execute: () => void;
  verify: () => Promise<boolean>;
};

const ReCaptchaField: ForwardRefRenderFunction<
  ReCaptchaFieldHandle,
  ReCaptchaFieldProps
> = ({ onVerify, onError, className, props }, ref) => {
  const recaptchaRef = useRef<any>(null);
  const [errorShown, setErrorShown] = useState(false);

  const handleChange = () => {
    setErrorShown(false);
  };

  useImperativeHandle(ref, () => ({
    getValue: () => recaptchaRef.current?.getValue(),
    reset: () => {
      recaptchaRef.current?.reset();
      setErrorShown(false);
    },
    execute: () => {
      recaptchaRef.current?.execute();
    },
    async verify() {
      const captchaValue = recaptchaRef.current?.getValue();

      if (!captchaValue) {
        if (!errorShown && onError) {
          onError("Please verify the reCAPTCHA first!");
          setErrorShown(true);
        }
        return false;
      }

      try {
        const res = await fetch("/api/captcha/verify", {
          method: "POST",
          body: JSON.stringify({ captchaValue }),
          headers: { "content-type": "application/json" },
        });

        const data = await res.json();

        if (data.success) {
          onVerify?.(captchaValue);
          setErrorShown(false);
          return true;
        } else {
          if (!errorShown && onError) {
            onError("ReCAPTCHA verification failed");
            setErrorShown(true);
          }
          return false;
        }
      } catch (error) {
        if (!errorShown && onError) {
          onError("Error verifying reCAPTCHA");
          setErrorShown(true);
        }
        return false;
      }
    },
  }));

  return (
    <div className={className}>
      <Suspense fallback={<Loading />}>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={handleChange}
          {...props}
        />
      </Suspense>
    </div>
  );
};

export default forwardRef(ReCaptchaField);
