"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type RecruiterFormData = {
  // Company details
  companyName: string;
  industry: string;
  companyWebsite: string;
  companyAddress: string;
  companyType: string;
  gstNumber: string;
  companyBrochure: FileList | null;
  companyLogo: FileList | null;

  // Recruiter
  fullName: string;
  designation: string;
  officialEmail: string;
  mobileNumber: string;
  alternateContact: string;
  linkedinProfile: string;

  // Hiring requirement
  jobTitle: string;
  natureOfHiring: string;
  programmes: string;
  vacancies: string;
  ctc: string;
  minimumEligibility: string;
  jobLocation: string;
  preferredDriveDate: string;
  modeOfDrive: string;
  selectionProcess: string;
  jobDescription: string;
};

const industryOptions = [
  "IT / Software",
  "BFSI",
  "Consulting",
  "Manufacturing",
  "Healthcare / Pharma",
  "Law / Legal",
  "Media / JMC",
  "Hospitality",
  "Education",
  "Other",
];

const companyTypeOptions = [
  "Private Limited",
  "Public Limited",
  "LLP",
  "Partnership",
  "Proprietorship",
  "Government",
  "MNC",
  "Startup",
  "Other",
];

const hiringOptions = [
  "Full-time",
  "Internship",
  "Internship + PPO",
  "Part-time",
];

const driveModeOptions = ["On-campus", "Virtual", "Hybrid"];

export default function RecruiterRegistration() {
  const [activeStep, setActiveStep] = useState<1 | 2>(1);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<RecruiterFormData>({
    mode: "onSubmit",
    defaultValues: {
      companyName: "",
      industry: "",
      companyWebsite: "",
      companyAddress: "",
      companyType: "",
      gstNumber: "",
      companyBrochure: null,
      companyLogo: null,

      fullName: "",
      designation: "",
      officialEmail: "",
      mobileNumber: "",
      alternateContact: "",
      linkedinProfile: "",

      jobTitle: "",
      natureOfHiring: "",
      programmes: "",
      vacancies: "",
      ctc: "",
      minimumEligibility: "",
      jobLocation: "",
      preferredDriveDate: "",
      modeOfDrive: "",
      selectionProcess: "",
      jobDescription: "",
    },
  });

  const goToHiringRequirement = async () => {
    const valid = await trigger([
      "companyName",
      "industry",
      "companyAddress",
      "fullName",
      "designation",
      "officialEmail",
      "mobileNumber",
    ]);

    if (valid) {
      setActiveStep(2);
    }
  };

  const goToCompanyDetails = () => {
    setActiveStep(1);
  };

  const onSubmit = (data: RecruiterFormData) => {
    console.log("Recruiter Registration:", data);

    // API call here
    // await recruiterService.create(data)
  };

  return (
    <main className="min-h-screen bg-[#eeeeec]">
      {/* Header */}
      <section className="bg-[#eef4fb]">
        <div className="mx-auto max-w-[920px] px-5 py-8 text-center sm:py-10">
          <h1 className="font-serif text-[34px] leading-tight text-[#001b3a] sm:text-[38px]">
            Recruiter Registration
          </h1>

          <p className="mt-1 text-[15px] text-black sm:text-base">
            Campus Placement Drive 2026–27
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="bg-[#faf8f4] px-4 py-6 sm:px-6 sm:py-8">
        <div className="mx-auto max-w-7xl">
          {/* Tabs */}
          <div className="mb-6 flex justify-center">
            <div className="flex">
              <button
                type="button"
                onClick={() => setActiveStep(1)}
                className={`px-4 py-2 text-sm transition-colors ${
                  activeStep === 1
                    ? "bg-[#092542] text-white"
                    : "bg-white text-[#222]"
                }`}
              >
                Company details
              </button>

              <button
                type="button"
                onClick={() => {
                  if (activeStep === 2) {
                    setActiveStep(2);
                  }
                }}
                className={`px-4 py-2 text-sm transition-colors ${
                  activeStep === 2
                    ? "bg-[#092542] text-white"
                    : "bg-white text-[#222]"
                }`}
              >
                Hiring requirement
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* STEP 1 */}
            {activeStep === 1 && (
              <div className="border border-[#d8d8d8] bg-[#fffdfb] p-4 sm:p-5">
                {/* Basic Details */}
                <h2 className="mb-5 text-base font-semibold">Basic Details</h2>

                <div className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-3">
                  <FormField
                    label="Company / organization name"
                    required
                    error={errors.companyName?.message}
                  >
                    <input
                      {...register("companyName", {
                        required: "Company name is required",
                      })}
                      className={inputClass}
                    />
                  </FormField>

                  <FormField
                    label="Industry / sector"
                    required
                    error={errors.industry?.message}
                    hint="Options: IT / Software, BFSI, Consulting, Manufacturing, Healthcare / Pharma, Law / Legal, Media / JMC, Hospitality, Education, Other"
                  >
                    <select
                      {...register("industry", {
                        required: "Industry is required",
                      })}
                      className={selectClass}
                    >
                      <option value=""></option>

                      {industryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="Company website">
                    <input
                      type="url"
                      {...register("companyWebsite")}
                      className={inputClass}
                    />
                  </FormField>

                  <FormField
                    label="Company Address/Location"
                    required
                    error={errors.companyAddress?.message}
                  >
                    <input
                      {...register("companyAddress", {
                        required: "Company address is required",
                      })}
                      className={inputClass}
                    />
                  </FormField>

                  <FormField label="Company Type">
                    <select
                      {...register("companyType")}
                      className={selectClass}
                    >
                      <option value=""></option>

                      {companyTypeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="GST/Registration Number">
                    <input {...register("gstNumber")} className={inputClass} />
                  </FormField>

                  <FileField
                    label="Company brochure / JD upload"
                    register={register}
                    name="companyBrochure"
                  />

                  <FileField
                    label="Company logo upload"
                    register={register}
                    name="companyLogo"
                  />
                </div>

                {/* Recruiter */}
                <h2 className="mb-5 mt-12 text-base font-semibold">
                  Recruiter / point of contact
                </h2>

                <div className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-3">
                  <FormField
                    label="Full name"
                    required
                    error={errors.fullName?.message}
                  >
                    <input
                      {...register("fullName", {
                        required: "Full name is required",
                      })}
                      className={inputClass}
                    />
                  </FormField>

                  <FormField
                    label="Designation"
                    required
                    error={errors.designation?.message}
                  >
                    <input
                      {...register("designation", {
                        required: "Designation is required",
                      })}
                      className={inputClass}
                    />
                  </FormField>

                  <FormField
                    label="Official email ID"
                    required
                    error={errors.officialEmail?.message}
                  >
                    <input
                      type="email"
                      {...register("officialEmail", {
                        required: "Official email is required",
                      })}
                      className={inputClass}
                    />
                  </FormField>

                  <FormField
                    label="Mobile number"
                    required
                    error={errors.mobileNumber?.message}
                  >
                    <input
                      type="tel"
                      {...register("mobileNumber", {
                        required: "Mobile number is required",
                      })}
                      className={inputClass}
                    />
                  </FormField>

                  <FormField label="Alternate contact number">
                    <input
                      type="tel"
                      {...register("alternateContact")}
                      className={inputClass}
                    />
                  </FormField>

                  <FormField label="LinkedIn profile">
                    <input
                      {...register("linkedinProfile")}
                      className={inputClass}
                    />
                  </FormField>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex justify-between gap-4">
                  {/* <button
                    type="button"
                    className="bg-[#f1f1f1] px-6 py-3 text-sm font-medium text-[#092542]"
                    onClick={() => {
                      console.log("Draft:", getValues());
                    }}
                  >
                    Save As Draft
                  </button> */}

                  <button
                    type="button"
                    onClick={goToHiringRequirement}
                    className="bg-[#ed0000] px-10 py-3 text-sm text-white transition hover:bg-[#c90000]"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {activeStep === 2 && (
              <div className="border border-[#d8d8d8] bg-[#fffdfb] p-4 sm:p-5">
                <h2 className="mb-5 text-base font-semibold">
                  What the drive is looking for?
                </h2>

                <div className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-3">
                  <FormField label="Job title / profile offered" required>
                    <input
                      {...register("jobTitle", {
                        required: "Job title is required",
                      })}
                      className={inputClass}
                    />
                  </FormField>

                  <FormField
                    label="Nature of hiring"
                    required
                    hint="Options: Full-time, Internship, Internship + PPO, Part-time"
                  >
                    <select
                      {...register("natureOfHiring", {
                        required: "Nature of hiring is required",
                      })}
                      className={selectClass}
                    >
                      <option value=""></option>

                      {hiringOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  {/* Full width */}
                  <div className="md:col-span-3">
                    <FormField label="Programmes / schools eligible" required>
                      <input
                        {...register("programmes", {
                          required: "Programmes / schools are required",
                        })}
                        className={inputClass}
                      />
                    </FormField>
                  </div>

                  <FormField label="Number of vacancies" required>
                    <input
                      type="number"
                      {...register("vacancies", {
                        required: "Number of vacancies is required",
                      })}
                      className={inputClass}
                    />
                  </FormField>

                  <FormField label="CTC / stipend offered" required>
                    <input
                      {...register("ctc", {
                        required: "CTC / stipend is required",
                      })}
                      className={inputClass}
                    />
                  </FormField>

                  <FormField label="Minimum eligibility (CGPA / %)">
                    <input
                      {...register("minimumEligibility")}
                      className={inputClass}
                    />
                  </FormField>

                  <FormField label="Job location(s)" required>
                    <input
                      {...register("jobLocation", {
                        required: "Job location is required",
                      })}
                      className={inputClass}
                    />
                  </FormField>

                  <FormField label="Preferred drive date">
                    <input
                      type="date"
                      {...register("preferredDriveDate")}
                      className={inputClass}
                    />
                  </FormField>

                  <FormField
                    label="Mode of drive"
                    hint="Options: On-campus, Virtual, Hybrid"
                  >
                    <select
                      {...register("modeOfDrive")}
                      className={selectClass}
                    >
                      <option value=""></option>

                      {driveModeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="Selection process">
                    <input
                      {...register("selectionProcess")}
                      className={inputClass}
                    />
                  </FormField>

                  {/* Job description */}
                  <div className="md:col-span-3">
                    <FormField label="Job description / additional requirements">
                      <textarea
                        {...register("jobDescription")}
                        rows={4}
                        className={`${inputClass} resize-none py-2`}
                      />
                    </FormField>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={goToCompanyDetails}
                    className="bg-[#f1f1f1] px-6 py-3 text-sm font-medium text-[#092542]"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    className="bg-[#ed0000] px-10 py-3 text-sm text-white transition hover:bg-[#c90000]"
                  >
                    Send
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

/* ---------------------------------------------
   Reusable Form Field
--------------------------------------------- */

type FormFieldProps = {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
};

function FormField({ label, required, hint, error, children }: FormFieldProps) {
  return (
    <div className="min-w-0">
      <label className="mb-1.5 block text-[12px] leading-tight text-[#111]">
        {label}
        {required && " *"}
      </label>

      {children}

      {hint && (
        <p className="mt-1 text-[9px] italic leading-tight text-[#777]">
          {hint}
        </p>
      )}

      {error && <p className="mt-1 text-[10px] text-red-600">{error}</p>}
    </div>
  );
}

/* ---------------------------------------------
   File Field
--------------------------------------------- */

type FileFieldProps = {
  label: string;
  register: ReturnType<typeof useForm<RecruiterFormData>>["register"];
  name: "companyBrochure" | "companyLogo";
};

function FileField({ label, register, name }: FileFieldProps) {
  return (
    <FormField label={label}>
      <div className="relative h-[35px] border border-[#d9d9d9] bg-white">
        <input
          type="file"
          {...register(name)}
          className="
            absolute
            inset-0
            h-full
            w-full
            cursor-pointer
            opacity-0
          "
        />

        <div className="pointer-events-none flex h-full items-center justify-end px-1">
          <span className="bg-[#eeeeee] px-5 py-1.5 text-[10px] text-black">
            Browse
          </span>
        </div>
      </div>
    </FormField>
  );
}

/* ---------------------------------------------
   Input styles
--------------------------------------------- */

const inputClass =
  "h-[35px] w-full border border-[#d9d9d9] bg-white px-2.5 text-[12px] text-[#111] outline-none transition focus:border-[#092542]";

const selectClass =
  "h-[35px] w-full appearance-auto border border-[#d9d9d9] bg-white px-2.5 text-[12px] text-[#111] outline-none transition focus:border-[#092542]";
