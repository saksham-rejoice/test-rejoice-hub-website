import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import FileInput from "~/components/ui/FileInput";
import { JobDetail } from "~/types/careerTypes";
import { useCareerStore } from "~/store/useCareerStore";
import ReCaptchaField, { ReCaptchaFieldHandle } from "~/utils/reCaptcha";
import { useEffect, useRef, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";

type ApplicationSectionProps = {
  job: JobDetail;
  changeTab: (tab: "career" | "questions" | "score") => void;
};

const ApplicationSection: React.FC<ApplicationSectionProps> = ({ job, changeTab }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const { submitApplication, isFormSubmitting } = useCareerStore();
  const recaptchaRef = useRef<ReCaptchaFieldHandle>(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [apiError, setApiError] = useState<string | null>(null);
  
  const [searchTerm, setSearchTerm] = useState('');
  
  const countryCodes = [
    { code: "+1", name: "United States/Canada" },
    { code: "+44", name: "United Kingdom" },
    { code: "+91", name: "India" },
    { code: "+86", name: "China" },
    { code: "+81", name: "Japan" },
    { code: "+82", name: "South Korea" },
    { code: "+65", name: "Singapore" },
    { code: "+60", name: "Malaysia" },
    { code: "+62", name: "Indonesia" },
    { code: "+63", name: "Philippines" },
    { code: "+66", name: "Thailand" },
    { code: "+84", name: "Vietnam" },
    { code: "+61", name: "Australia" },
    { code: "+64", name: "New Zealand" },
    { code: "+971", name: "UAE" },
    { code: "+966", name: "Saudi Arabia" },
    { code: "+20", name: "Egypt" },
    { code: "+27", name: "South Africa" },
    { code: "+33", name: "France" },
    { code: "+49", name: "Germany" },
    { code: "+39", name: "Italy" },
    { code: "+34", name: "Spain" },
    { code: "+7", name: "Russia" },
    { code: "+55", name: "Brazil" },
    { code: "+52", name: "Mexico" },
    { code: "+54", name: "Argentina" },
  ].sort((a, b) => a.name.localeCompare(b.name));
  
  const filteredCountries = countryCodes.filter(country => 
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    country.code.includes(searchTerm)
  );

  const candidateApplicationSchema = z.object({
    email: z.string({ required_error: "Email address is required" }).email({ message: "Enter a valid email" }),
    Name: z.string({ required_error: "Full name is required" }).trim().min(3, { message: "Your name must be at least 2 characters long" }),
    username: job.githubRequired
      ? z
        .string({ required_error: "GitHub username is required" })
        .trim()
        .min(2, { message: "GitHub username must be at least 2 characters long" })
        .max(39, { message: "GitHub username must be less than 39 characters" })
        .regex(/^(?!-)(?!.*--)[a-zA-Z0-9-]{1,39}(?<!-)$/, "Enter a valid GitHub username (no links, spaces, or invalid characters)")
      : z.string().optional(),
    city: z.string({ required_error: "City is required" }).trim().min(2, { message: "City name must be at least 2 characters long" }),
    number: z.string({ required_error: "Phone number is required" })
    .min(10, { message: "Phone number must be 10 digits" })
    .max(10, { message: "Phone number must be 10 digits" })
    .regex(/^\d{10}$/, { message: "Please enter a valid 10-digit phone number" }),
    currentSalary: z.string({ required_error: "Current salary is required" })
    .min(1, { message: "Please enter your current salary" })
    .regex(/^[0-9]*$/, { message: "Please enter numbers only" }),
    expectedSalary: z.string({ required_error: "Expected salary is required" })
    .min(1, { message: "Please enter your expected salary" })
    .regex(/^[0-9]*$/, { message: "Please enter numbers only" }),
    cv: z.any({ required_error: "PDF resume is required" })
      .refine((files) => files?.length > 0 && files?.[0]?.type === "application/pdf", {
        message: "PDF Resume is required",
      })
      .refine((files) => files?.[0]?.size <= 3 * 1024 * 1024, {
        message: "File size must be less than 3MB",
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(candidateApplicationSchema),
  });

  const handleApplicationSubmit = async (data: any) => {
    setApiError(null); // Clear any previous errors
    try {
      const formData = new FormData();
      formData.append("file", data.cv[0]);
      formData.append("name", data.Name);
      if (job.githubRequired && data.username) {
        formData.append("username", data.username);
      }
      // Combine country code with phone number (ensuring only numbers)
      const phoneNumber = data.number.replace(/\D/g, '');
      if (phoneNumber.length !== 10) {
        throw new Error('Phone number must be 10 digits');
      }
      const fullPhoneNumber = `${selectedCountryCode}${phoneNumber}`;
      formData.append("phone_number", fullPhoneNumber);
      formData.append("email", data.email);
      formData.append("city", data.city);
      formData.append("current_salary", data.currentSalary);
      formData.append("expected_salary", data.expectedSalary);
      formData.append("role", job.positionType);
      formData.append("githubRequired", job.githubRequired.toString());
      recaptchaRef.current?.reset();
      await submitApplication(formData);
      changeTab("questions");
    } catch (error) {
      console.error("Form submission failed:", error);
      setApiError(error instanceof Error ? error.message : "An error occurred while submitting the form. Please try again.");
    }
  };

  const handleRecaptchaError = (errorMessage: string) => {
    console.error(errorMessage);
  };

  return (
    <div className="mt-10 mx-auto w-full max-w-[1000px] py-[50px] px-[54px] shadow-xl bg-white border-[1px] border-[#EBEAE9] rounded-[20px]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center">Career Application</h1>
        <p className="text-h5 text-center">Please fill in your information below to apply</p>
      </div>

      <form onSubmit={handleSubmit(handleApplicationSubmit)} className="space-y-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.Name?.message?.toString()}
            required
            {...register("Name")}
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email address"
            error={errors.email?.message?.toString()}
            required
            {...register("email")}
          />

          {job.githubRequired && (
            <Input
              label="Github Username"
              placeholder="Enter your Github username"
              error={errors.username?.message?.toString()}
              required
              {...register("username")}
            />
          )}

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <Select
                value={selectedCountryCode}
                onValueChange={(value) => {
                  setSelectedCountryCode(value);
                  setSearchTerm(''); // Reset search when a country is selected
                }}
              >
                <SelectTrigger className="w-[100px] h-[50px]">
                  <SelectValue placeholder="+91">
                    {selectedCountryCode}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="max-h-[300px] overflow-auto">
                  <div className="px-3 py-2">
                    <input
                      type="text"
                      placeholder="Search country..."
                      className="w-full p-2 text-sm border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{country.code}</span>
                          <span className="text-muted-foreground">{country.name}</span>
                        </div>
                      </SelectItem>
                    ))
                  ) : (
                    <div className="px-3 py-2 text-sm text-muted-foreground">
                      No countries found
                    </div>
                  )}
                </SelectContent>
              </Select>
              <Input
                type="tel"
                className="flex-1"
                placeholder="Enter phone number"
                error={errors.number?.message?.toString()}
                required
                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                  const target = e.target as HTMLInputElement;
                  // Remove all non-numeric characters and limit to 10 digits
                  target.value = target.value.replace(/\D/g, '').slice(0, 10);
                }}
                {...register("number")}
              />
            </div>
            {errors.number?.message && (
              <p className="text-sm text-red-500">{errors.number.message.toString()}</p>
            )}
          </div>

          <Input
            label="City"
            placeholder="Enter your city"
            error={errors.city?.message?.toString()}
            required
            {...register("city")}
          />

          <Input
            label="Current Salary (per annum)"
            type="number"
            placeholder="Enter your current salary"
            error={errors.currentSalary?.message?.toString()}
            required
            {...register("currentSalary")}
          />

          <Input
            label="Expected Salary (per annum)"
            type="number"
            placeholder="Enter your expected salary"
            error={errors.expectedSalary?.message?.toString()}
            required
            {...register("expectedSalary")}
          />
        </div>

        <FileInput
          label=""
          required
          error={errors.cv?.message?.toString()}
          acceptedFileTypes={["application/pdf"]}
          maxSize={3}
          register={register("cv")}
        />

        <div className="mt-5">
          <ReCaptchaField ref={recaptchaRef} onError={handleRecaptchaError} />
          
          {apiError && (
            <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
              <p className="font-medium">Error</p>
              <p>{apiError}</p>
            </div>
          )}
        </div>

        <div className="col-span-2 flex justify-center mt-8">
          <Button
            type="submit"
            loading={isFormSubmitting}
            size="lg"
            className="w-full sm:w-auto cursor-pointer min-w-[200px] bg-navy-950 hover:bg-orange-400"
          >
            {isFormSubmitting ? "Please wait..." : "Submit Application"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationSection;
