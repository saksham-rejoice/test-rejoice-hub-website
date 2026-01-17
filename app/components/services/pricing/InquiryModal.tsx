import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ServiceKey, getPricingByKey } from "~/data/pricing";
import { trackPricingContactSubmit } from "~/lib/analytics";
import { useInquiryModal } from "~/store/useInquiryModal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import Input from "~/components/ui/input";
import { CheckCircle, Loader2, Mail } from "lucide-react";
import { supabase } from "~/Supabase/supabaseClient";

const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  workEmail: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  service: z.string().min(2, "Please specify the service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

export function InquiryModal() {
  const { isOpen, serviceKey, source, close } = useInquiryModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const pricing = serviceKey ? getPricingByKey(serviceKey) : null;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      service: pricing?.title || "",
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    if (!serviceKey) return;

    setIsSubmitting(true);
    setError(null);

    try {
      // Try API first
      // const response = await fetch("/api/inquiry", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     ...data,
      //     serviceKey,
      //     source: "pricing_modal",
      //   }),
      // });

      // if (!response.ok) {
      //   throw new Error("API submission failed");
      // }

      // Track successful submission
      //trackPricingContactSubmit(serviceKey, data);
      const { error, status } = await supabase
        .from("rejoice_hub_inquiry_form")
        .insert({
          name: data.name.trim(),
          work_email: data.workEmail.trim(),
          company: data.company.trim(),
          service: data.service.trim(),
          message: data.message.trim(),
          service_key: serviceKey,
          source,
        });
      if (error) {
        throw new Error("API submission failed");
      }

      setIsSuccess(true);
      reset();
    } catch (apiError) {
      // Fallback to mailto
      try {
        //         const subject = encodeURIComponent(
        //           `Inquiry for ${pricing?.title || "Service"}`
        //         );
        //         const body = encodeURIComponent(`
        // Name: ${data.name}
        // Email: ${data.workEmail}
        // Company: ${data.company}
        // Service: ${data.service}
        // Message: ${data.message}
        //         `);

        //         const mailtoUrl = `mailto:sales@rejoicehub.com?subject=${subject}&body=${body}`;
        //         window.location.href = mailtoUrl;

        //         // Track fallback submission
        //         trackPricingContactSubmit(serviceKey, { ...data, method: "mailto" });
        setIsSuccess(true);
        reset();
      } catch (mailtoError) {
        setError(
          "Failed to submit inquiry. Please try again or contact us directly."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    close();
    setIsSuccess(false);
    setError(null);
    reset();
  };

  if (!pricing) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-navy-950">
            Get Started with {pricing.title}
          </DialogTitle>
          <DialogDescription className="text-navy-700">
            {pricing.subtitle}
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-navy-950 mb-2">
              Thank You!
            </h3>
            <p className="text-navy-700 mb-6">
              We've received your inquiry and will get back to you within 24
              hours.
            </p>
            <Button onClick={handleClose} className="w-full">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-navy-700 mb-1"
              >
                Full Name *
              </label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Enter your full name"
                className="w-full"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="workEmail"
                className="block text-sm font-medium text-navy-700 mb-1"
              >
                Work Email *
              </label>
              <Input
                id="workEmail"
                type="email"
                {...register("workEmail")}
                placeholder="your.email@company.com"
                className="w-full"
                aria-invalid={errors.workEmail ? "true" : "false"}
              />
              {errors.workEmail && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.workEmail.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-navy-700 mb-1"
              >
                Company *
              </label>
              <Input
                id="company"
                {...register("company")}
                placeholder="Your company name"
                className="w-full"
                aria-invalid={errors.company ? "true" : "false"}
              />
              {errors.company && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.company.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-navy-700 mb-1"
              >
                Service *
              </label>
              <Input
                id="service"
                {...register("service")}
                placeholder="Service you're interested in"
                className="w-full"
                aria-invalid={errors.service ? "true" : "false"}
              />
              {errors.service && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.service.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-navy-700 mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                {...register("message")}
                placeholder="Tell us about your project requirements..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  "
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <div className="flex space-x-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 text-white bg-amber-600 hover:bg-amber-700"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
