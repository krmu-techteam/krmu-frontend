"use client";

import { FileText, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  FieldErrors,
  Path,
  RegisterOptions,
  UseFormRegister,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";

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

const phoneRegex = /^[6-9]\d{9}$/;

const urlRegex =
  /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i;

const inputClass =
  "h-[35px] w-full border bg-white px-2.5 text-[12px] text-[#111] outline-none transition focus:border-[#092542]";

const selectClass =
  "h-[35px] w-full appearance-auto border bg-white px-2.5 text-[12px] text-[#111] outline-none transition focus:border-[#092542]";

export default function RecruiterRegistration() {
  const [activeStep, setActiveStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<RecruiterFormData>({
    mode: "onSubmit",
    reValidateMode: "onChange",

    defaultValues: {
      companyName: "",
      industry: "",
      companyWebsite: "",
      companyAddress: "",
      companyType: "",
      gstNumber: "",
      companyBrochure: null,
    //   companyLogo: "",

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

  // =========================================================
  // STEP 1 VALIDATION
  // =========================================================

  const goToHiringRequirement = async () => {
    const valid = await trigger([
      "companyName",
      "industry",
      "companyWebsite",
      "companyAddress",
      "companyType",
      "gstNumber",
      "companyBrochure",
      "companyLogo",
      "fullName",
      "designation",
      "officialEmail",
      "mobileNumber",
      "alternateContact",
      "linkedinProfile",
    ]);

    if (valid) {
      setActiveStep(2);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      toast.error("Please fix the highlighted fields");
    }
  };

  // =========================================================
  // STEP 2 -> STEP 1
  // =========================================================

  const goToCompanyDetails = () => {
    setActiveStep(1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================================================
  // SUBMIT
  // =========================================================

  const onSubmit = async (data: RecruiterFormData) => {
    try {
      setIsSubmitting(true);

      const formData = new FormData();

      // =====================================================
      // COMPANY DETAILS
      // =====================================================

      formData.append(
        "companyName",
        data.companyName.trim(),
      );

      formData.append(
        "industry",
        data.industry,
      );

      formData.append(
        "companyWebsite",
        data.companyWebsite.trim(),
      );

      formData.append(
        "companyAddress",
        data.companyAddress.trim(),
      );

      formData.append(
        "companyType",
        data.companyType,
      );

      formData.append(
        "gstNumber",
        data.gstNumber.trim(),
      );

      // =====================================================
      // RECRUITER
      // =====================================================

      formData.append(
        "fullName",
        data.fullName.trim(),
      );

      formData.append(
        "designation",
        data.designation.trim(),
      );

      formData.append(
        "officialEmail",
        data.officialEmail.trim(),
      );

      formData.append(
        "mobileNumber",
        data.mobileNumber.trim(),
      );

      formData.append(
        "alternateContact",
        data.alternateContact.trim(),
      );

      formData.append(
        "linkedinProfile",
        data.linkedinProfile.trim(),
      );

      // =====================================================
      // HIRING REQUIREMENT
      // =====================================================

      formData.append(
        "jobTitle",
        data.jobTitle.trim(),
      );

      formData.append(
        "natureOfHiring",
        data.natureOfHiring,
      );

      formData.append(
        "programmes",
        data.programmes.trim(),
      );

      formData.append(
        "vacancies",
        data.vacancies.trim(),
      );

      formData.append(
        "ctc",
        data.ctc.trim(),
      );

      formData.append(
        "minimumEligibility",
        data.minimumEligibility.trim(),
      );

      formData.append(
        "jobLocation",
        data.jobLocation.trim(),
      );

      formData.append(
        "preferredDriveDate",
        data.preferredDriveDate,
      );

      formData.append(
        "modeOfDrive",
        data.modeOfDrive,
      );

      formData.append(
        "selectionProcess",
        data.selectionProcess.trim(),
      );

      formData.append(
        "jobDescription",
        data.jobDescription.trim(),
      );

      // =====================================================
      // COMPANY BROCHURE
      // =====================================================

      const brochure =
        data.companyBrochure?.[0];

      if (brochure instanceof File) {
        formData.append(
          "companyBrochure",
          brochure,
        );
      }

      // =====================================================
      // COMPANY LOGO
      // =====================================================

      const logo =
        data.companyLogo?.[0];

      if (logo instanceof File) {
        formData.append(
          "companyLogo",
          logo,
        );
      }

      // =====================================================
      // DEBUG FORM DATA
      // =====================================================

      console.log(
        "========== FORM DATA ==========",
      );

      for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
          console.log(
            key,
            value.name,
            value.type,
            value.size,
          );
        } else {
          console.log(key, value);
        }
      }

      console.log(
        "===============================",
      );

      // =====================================================
      // API REQUEST
      // =====================================================

      const response = await fetch(
      "https://forms.krmangalam.ac.in/back-desk/recruiter-registration.php",
        {
          method: "POST",
          body: formData,
        },
      );

      // =====================================================
      // SAFE RESPONSE HANDLING
      // =====================================================

      const responseText =
        await response.text();

      console.log(
        "========== API RESPONSE ==========",
      );

      console.log(
        "Status:",
        response.status,
      );

      console.log(
        "Content-Type:",
        response.headers.get(
          "content-type",
        ),
      );

      console.log(
        "Response:",
        responseText,
      );

      console.log(
        "==================================",
      );

      // Empty response

      if (!responseText.trim()) {
        throw new Error(
          `Server returned an empty response (HTTP ${response.status})`,
        );
      }

      let result: {
        success?: boolean;
        message?: string;
        data?: unknown;
      };

      try {
        result = JSON.parse(
          responseText,
        );
      } catch (jsonError) {
        console.error(
          "JSON parse error:",
          jsonError,
        );

        throw new Error(
          "Server returned an invalid response. Please try again.",
        );
      }

      // =====================================================
      // API ERROR
      // =====================================================

      if (
        !response.ok ||
        !result.success
      ) {
        throw new Error(
          result.message ||
            "Unable to submit registration",
        );
      }

      // =====================================================
      // SUCCESS
      // =====================================================

      toast.success(
        "Registration submitted successfully",
        {
          description:
            "Thank you for registering for the Campus Placement Drive 2026–27.",
        },
      );

      // Optional reset after successful submission
      // reset();

    } catch (error) {
      console.error(
        "Recruiter registration error:",
        error,
      );

      toast.error(
        "Submission failed",
        {
          description:
            error instanceof Error
              ? error.message
              : "Something went wrong. Please try again.",
        },
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#eeeeec]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-[#eef4fb] pb-20 pt-28 font-poppins xl:pb-24 xl:pt-40">
        <div className="mx-auto max-w-[920px] px-4 text-center">

          <h1 className="font-newsreader text-[34px] leading-tight text-[#001b3a] sm:text-[55px]">
            Recruiter Registration
          </h1>

          <p className="mt-1 text-[15px] text-black sm:text-2xl">
            Campus Placement Drive 2026–27
          </p>

        </div>
      </section>


      {/* =====================================================
          MAIN
      ====================================================== */}

      <section className="bg-[#faf8f4] px-4 pb-20 pt-10">

        <div className="mx-auto max-w-7xl">

          {/* =================================================
              TABS
          ================================================== */}

          <div className="mb-10 flex justify-center">

            <div className="flex">

              <button
                type="button"
                onClick={() =>
                  setActiveStep(1)
                }
                className={`px-5 py-2 text-base transition-colors sm:text-2xl ${
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
                  if (activeStep === 1) {
                    goToHiringRequirement();
                  }
                }}
                className={`px-4 py-2 text-base transition-colors sm:text-2xl ${
                  activeStep === 2
                    ? "bg-[#092542] text-white"
                    : "bg-white text-[#222]"
                }`}
              >
                Hiring requirement
              </button>

            </div>

          </div>


          {/* =================================================
              FORM
          ================================================== */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >

            {/* =================================================
                STEP 1
            ================================================== */}

            {activeStep === 1 && (

              <div className="border border-[#d8d8d8] bg-[#fefcfa] p-4 sm:p-5">

                {/* BASIC DETAILS */}

                <h2 className="mb-5 text-base font-semibold">
                  Basic Details
                </h2>

                <div className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-3">

                  {/* COMPANY NAME */}

                  <FormField
                    label="Company / organization name"
                    required
                    error={
                      errors.companyName?.message
                    }
                  >
                    <input
                      {...register(
                        "companyName",
                        {
                          required:
                            "Company name is required",

                          validate: (value) =>
                            value.trim()
                              .length >= 2 ||
                            "Company name must be at least 2 characters",
                        },
                      )}
                      className={getInputClass(
                        !!errors.companyName,
                      )}
                    />
                  </FormField>


                  {/* INDUSTRY */}

                  <FormField
                    label="Industry / sector"
                    required
                    error={
                      errors.industry?.message
                    }
                  >
                    <select
                      {...register(
                        "industry",
                        {
                          required:
                            "Industry is required",
                        },
                      )}
                      className={getSelectClass(
                        !!errors.industry,
                      )}
                    >
                      <option value="">
                        Select industry
                      </option>

                      {industryOptions.map(
                        (option) => (
                          <option
                            key={option}
                            value={option}
                          >
                            {option}
                          </option>
                        ),
                      )}
                    </select>
                  </FormField>


                  {/* WEBSITE */}

                  <FormField
                    label="Company website"
                    error={
                      errors.companyWebsite?.message
                    }
                  >
                    <input
                      type="url"
                      placeholder="https://example.com"
                      {...register(
                        "companyWebsite",
                        {
                          validate: (
                            value,
                          ) => {
                            if (!value)
                              return true;

                            return (
                              urlRegex.test(
                                value,
                              ) ||
                              "Please enter a valid website URL"
                            );
                          },
                        },
                      )}
                      className={getInputClass(
                        !!errors.companyWebsite,
                      )}
                    />
                  </FormField>


                  {/* ADDRESS */}

                  <FormField
                    label="Company Address/Location"
                    required
                    error={
                      errors.companyAddress?.message
                    }
                  >
                    <input
                      {...register(
                        "companyAddress",
                        {
                          required:
                            "Company address is required",

                          validate: (value) =>
                            value.trim()
                              .length >= 5 ||
                            "Please enter a valid company address",
                        },
                      )}
                      className={getInputClass(
                        !!errors.companyAddress,
                      )}
                    />
                  </FormField>


                  {/* COMPANY TYPE */}

                  <FormField
                    label="Company Type"
                    error={
                      errors.companyType?.message
                    }
                  >
                    <select
                      {...register(
                        "companyType",
                      )}
                      className={getSelectClass(
                        !!errors.companyType,
                      )}
                    >
                      <option value="">
                        Select company type
                      </option>

                      {companyTypeOptions.map(
                        (option) => (
                          <option
                            key={option}
                            value={option}
                          >
                            {option}
                          </option>
                        ),
                      )}
                    </select>
                  </FormField>


                  {/* GST */}

                  <FormField
                    label="GST/Registration Number"
                    error={
                      errors.gstNumber?.message
                    }
                  >
                    <input
                      {...register(
                        "gstNumber",
                        {
                          validate: (
                            value,
                          ) => {
                            if (!value)
                              return true;

                            return (
                              value.trim()
                                .length >= 5 ||
                              "Please enter a valid registration number"
                            );
                          },
                        },
                      )}
                      className={getInputClass(
                        !!errors.gstNumber,
                      )}
                    />
                  </FormField>


                  {/* BROCHURE */}

                  <FileField
                    label="Company brochure / JD upload"
                    register={register}
                    name="companyBrochure"
                    error={
                      errors.companyBrochure
                        ?.message
                    }
                  />


                  {/* LOGO */}

                  <FileField
                    label="Company logo upload"
                    register={register}
                    name="companyLogo"
                    error={
                      errors.companyLogo
                        ?.message
                    }
                  />

                </div>


                {/* =================================================
                    RECRUITER
                ================================================== */}

                <h2 className="mb-5 mt-12 text-base font-semibold">
                  Recruiter / point of contact
                </h2>

                <div className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-3">

                  {/* FULL NAME */}

                  <FormField
                    label="Full name"
                    required
                    error={
                      errors.fullName?.message
                    }
                  >
                    <input
                      {...register(
                        "fullName",
                        {
                          required:
                            "Full name is required",

                          validate: (value) =>
                            value.trim()
                              .length >= 2 ||
                            "Please enter a valid name",
                        },
                      )}
                      className={getInputClass(
                        !!errors.fullName,
                      )}
                    />
                  </FormField>


                  {/* DESIGNATION */}

                  <FormField
                    label="Designation"
                    required
                    error={
                      errors.designation?.message
                    }
                  >
                    <input
                      {...register(
                        "designation",
                        {
                          required:
                            "Designation is required",
                        },
                      )}
                      className={getInputClass(
                        !!errors.designation,
                      )}
                    />
                  </FormField>


                  {/* EMAIL */}

                  <FormField
                    label="Official email ID"
                    required
                    error={
                      errors.officialEmail?.message
                    }
                  >
                    <input
                      type="email"
                      {...register(
                        "officialEmail",
                        {
                          required:
                            "Official email is required",

                          pattern: {
                            value:
                              /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message:
                              "Please enter a valid email address",
                          },
                        },
                      )}
                      className={getInputClass(
                        !!errors.officialEmail,
                      )}
                    />
                  </FormField>


                  {/* MOBILE */}

                  <FormField
                    label="Mobile number"
                    required
                    error={
                      errors.mobileNumber?.message
                    }
                  >
                    <input
                      type="tel"
                      maxLength={10}
                      inputMode="numeric"
                      {...register(
                        "mobileNumber",
                        {
                          required:
                            "Mobile number is required",

                          pattern: {
                            value:
                              phoneRegex,
                            message:
                              "Please enter a valid 10-digit mobile number",
                          },
                        },
                      )}
                      className={getInputClass(
                        !!errors.mobileNumber,
                      )}
                    />
                  </FormField>


                  {/* ALTERNATE */}

                  <FormField
                    label="Alternate contact number"
                    error={
                      errors.alternateContact
                        ?.message
                    }
                  >
                    <input
                      type="tel"
                      maxLength={10}
                      inputMode="numeric"
                      {...register(
                        "alternateContact",
                        {
                          validate: (
                            value,
                          ) => {
                            if (!value)
                              return true;

                            return (
                              phoneRegex.test(
                                value,
                              ) ||
                              "Please enter a valid 10-digit mobile number"
                            );
                          },
                        },
                      )}
                      className={getInputClass(
                        !!errors.alternateContact,
                      )}
                    />
                  </FormField>


                  {/* LINKEDIN */}

                  <FormField
                    label="LinkedIn profile"
                    error={
                      errors.linkedinProfile
                        ?.message
                    }
                  >
                    <input
                      placeholder="https://linkedin.com/in/..."
                      {...register(
                        "linkedinProfile",
                        {
                          validate: (
                            value,
                          ) => {
                            if (!value)
                              return true;

                            return (
                              value
                                .toLowerCase()
                                .includes(
                                  "linkedin.com",
                                ) ||
                              "Please enter a valid LinkedIn profile URL"
                            );
                          },
                        },
                      )}
                      className={getInputClass(
                        !!errors.linkedinProfile,
                      )}
                    />
                  </FormField>

                </div>


                {/* =================================================
                    STEP 1 BUTTON
                ================================================== */}

                <div className="mt-8 flex justify-end">

                  <button
                    type="button"
                    onClick={
                      goToHiringRequirement
                    }
                    className="bg-[#ed0000] px-10 py-3 text-sm text-white transition hover:bg-[#c90000]"
                  >
                    Next
                  </button>

                </div>

              </div>
            )}


            {/* =================================================
                STEP 2
            ================================================== */}

            {activeStep === 2 && (

              <div className="border border-[#d8d8d8] bg-[#fefcfa] p-4 sm:p-5">

                <h2 className="mb-5 text-base font-semibold">
                  What the drive is looking for?
                </h2>

                <div className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-3">

                  {/* JOB TITLE */}

                  <FormField
                    label="Job title / profile offered"
                    required
                    error={
                      errors.jobTitle?.message
                    }
                  >
                    <input
                      {...register(
                        "jobTitle",
                        {
                          required:
                            "Job title is required",
                        },
                      )}
                      className={getInputClass(
                        !!errors.jobTitle,
                      )}
                    />
                  </FormField>


                  {/* NATURE OF HIRING */}

                  <FormField
                    label="Nature of hiring"
                    required
                    error={
                      errors.natureOfHiring?.message
                    }
                  >
                    <select
                      {...register(
                        "natureOfHiring",
                        {
                          required:
                            "Nature of hiring is required",
                        },
                      )}
                      className={getSelectClass(
                        !!errors.natureOfHiring,
                      )}
                    >
                      <option value="">
                        Select hiring type
                      </option>

                      {hiringOptions.map(
                        (option) => (
                          <option
                            key={option}
                            value={option}
                          >
                            {option}
                          </option>
                        ),
                      )}
                    </select>
                  </FormField>


                  {/* PROGRAMMES */}

                  <div className="md:col-span-3">

                    <FormField
                      label="Programmes / schools eligible"
                      required
                      error={
                        errors.programmes?.message
                      }
                    >
                      <input
                        {...register(
                          "programmes",
                          {
                            required:
                              "Programmes / schools are required",
                          },
                        )}
                        className={getInputClass(
                          !!errors.programmes,
                        )}
                      />
                    </FormField>

                  </div>


                  {/* VACANCIES */}

                  <FormField
                    label="Number of vacancies"
                    required
                    error={
                      errors.vacancies?.message
                    }
                  >
                    <input
                      type="number"
                      min={1}
                      {...register(
                        "vacancies",
                        {
                          required:
                            "Number of vacancies is required",

                          validate: (
                            value,
                          ) => {
                            const number =
                              Number(value);

                            if (
                              !Number.isInteger(
                                number,
                              ) ||
                              number < 1
                            ) {
                              return "Vacancies must be at least 1";
                            }

                            return true;
                          },
                        },
                      )}
                      className={getInputClass(
                        !!errors.vacancies,
                      )}
                    />
                  </FormField>


                  {/* CTC */}

                  <FormField
                    label="CTC / stipend offered"
                    required
                    error={
                      errors.ctc?.message
                    }
                  >
                    <input
                      {...register("ctc", {
                        required:
                          "CTC / stipend is required",
                      })}
                      className={getInputClass(
                        !!errors.ctc,
                      )}
                    />
                  </FormField>


                  {/* ELIGIBILITY */}

                  <FormField
                    label="Minimum eligibility (CGPA / %)"
                    error={
                      errors.minimumEligibility
                        ?.message
                    }
                  >
                    <input
                      {...register(
                        "minimumEligibility",
                      )}
                      className={getInputClass(
                        !!errors.minimumEligibility,
                      )}
                    />
                  </FormField>


                  {/* LOCATION */}

                  <FormField
                    label="Job location(s)"
                    required
                    error={
                      errors.jobLocation?.message
                    }
                  >
                    <input
                      {...register(
                        "jobLocation",
                        {
                          required:
                            "Job location is required",
                        },
                      )}
                      className={getInputClass(
                        !!errors.jobLocation,
                      )}
                    />
                  </FormField>


                  {/* DATE */}

                  <FormField
                    label="Preferred drive date"
                    error={
                      errors.preferredDriveDate
                        ?.message
                    }
                  >
                    <input
                      type="date"
                      {...register(
                        "preferredDriveDate",
                      )}
                      className={getInputClass(
                        !!errors.preferredDriveDate,
                      )}
                    />
                  </FormField>


                  {/* MODE */}

                  <FormField
                    label="Mode of drive"
                    error={
                      errors.modeOfDrive?.message
                    }
                  >
                    <select
                      {...register(
                        "modeOfDrive",
                      )}
                      className={getSelectClass(
                        !!errors.modeOfDrive,
                      )}
                    >
                      <option value="">
                        Select mode
                      </option>

                      {driveModeOptions.map(
                        (option) => (
                          <option
                            key={option}
                            value={option}
                          >
                            {option}
                          </option>
                        ),
                      )}
                    </select>
                  </FormField>


                  {/* SELECTION PROCESS */}

                  <FormField
                    label="Selection process"
                    error={
                      errors.selectionProcess
                        ?.message
                    }
                  >
                    <input
                      {...register(
                        "selectionProcess",
                      )}
                      className={getInputClass(
                        !!errors.selectionProcess,
                      )}
                    />
                  </FormField>


                  {/* JOB DESCRIPTION */}

                  <div className="md:col-span-3">

                    <FormField
                      label="Job description / additional requirements"
                      error={
                        errors.jobDescription
                          ?.message
                      }
                    >
                      <textarea
                        {...register(
                          "jobDescription",
                        )}
                        rows={4}
                        className={`${getInputClass(
                          !!errors.jobDescription,
                        )} h-auto resize-none py-2`}
                      />
                    </FormField>

                  </div>

                </div>


                {/* =================================================
                    STEP 2 BUTTONS
                ================================================== */}

                <div className="mt-8 flex items-center justify-between">

                  <button
                    type="button"
                    onClick={
                      goToCompanyDetails
                    }
                    className="bg-[#f1f1f1] px-6 py-3 text-sm font-medium text-[#092542] transition hover:bg-[#e5e5e5]"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#ed0000] px-10 py-3 text-sm text-white transition hover:bg-[#c90000] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting
                      ? "Sending..."
                      : "Send"}
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


// =========================================================
// FORM FIELD
// =========================================================

type FormFieldProps = {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
};

function FormField({
  label,
  required,
  hint,
  error,
  children,
}: FormFieldProps) {
  return (
    <div className="min-w-0">

      <label className="mb-1.5 block text-base leading-tight text-[#111]">
        {label}

        {required && (
          <span className="text-red-600">
            {" *"}
          </span>
        )}
      </label>

      {children}

      {hint && (
        <p className="mt-1 text-[9px] italic leading-tight text-[#777]">
          {hint}
        </p>
      )}

      {error && (
        <p className="mt-1 text-[10px] leading-tight text-red-600">
          {error}
        </p>
      )}

    </div>
  );
}


// =========================================================
// FILE FIELD
// =========================================================

type FileFieldProps = {
  label: string;

  register: UseFormRegister<RecruiterFormData>;

  name:
    | "companyBrochure"
    | "companyLogo";

  error?: string;
};

function FileField({
  label,
  register,
  name,
  error,
}: FileFieldProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const registration = register(name, {
    validate: (files) => {
      // File optional
      if (!files || files.length === 0) {
        return true;
      }

      const file = files[0];

      // 5 MB
      const maxSize = 5 * 1024 * 1024;

      if (file.size > maxSize) {
        return "File size must be less than 5 MB";
      }

      // LOGO
      if (name === "companyLogo") {
        const allowedTypes = [
          "image/jpeg",
          "image/png",
          "image/webp",
        ];

        if (!allowedTypes.includes(file.type)) {
          return "Only JPG, PNG or WEBP images are allowed";
        }
      }

      // BROCHURE
      if (name === "companyBrochure") {
        const allowedTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        if (!allowedTypes.includes(file.type)) {
          return "Only PDF, DOC or DOCX files are allowed";
        }
      }

      return true;
    },
  });

  // =====================================================
  // FILE CHANGE
  // =====================================================

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      setPreview(null);
      setFileName("");
      return;
    }

    setFileName(file.name);

    // Logo preview
    if (
      name === "companyLogo" &&
      file.type.startsWith("image/")
    ) {
      const objectUrl = URL.createObjectURL(file);

      setPreview(objectUrl);
    } else {
      setPreview(null);
    }
  };

  // =====================================================
  // CLEANUP OBJECT URL
  // =====================================================

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  // =====================================================
  // REMOVE FILE
  // =====================================================

  const removeFile = () => {
    setPreview(null);
    setFileName("");

    // Reset actual input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const fileInputRef =
    useRef<HTMLInputElement>(null);

  return (
    <FormField
      label={label}
      error={error}
    >
      {/* =================================================
          FILE INPUT
      ================================================== */}

      <div
        className={`relative h-[35px] border bg-white ${
          error
            ? "border-red-500"
            : "border-[#d9d9d9]"
        }`}
      >
        <input
          type="file"
          accept={
            name === "companyLogo"
              ? "image/jpeg,image/png,image/webp"
              : ".pdf,.doc,.docx"
          }
          {...registration}
          ref={(element) => {
            registration.ref(element);
            fileInputRef.current = element;
          }}
          onChange={(event) => {
            registration.onChange(event);
            handleFileChange(event);
          }}
          className="
            absolute
            inset-0
            z-10
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

      {/* =================================================
          PREVIEW
      ================================================== */}

      {fileName && (
        <div className="mt-2 flex items-center gap-3">

          {/* LOGO PREVIEW */}

          {name === "companyLogo" && preview ? (
            <div className="relative h-16 w-16 overflow-hidden border border-[#d9d9d9] bg-white">
              <img
                src={preview}
                alt="Company logo preview"
                className="h-full w-full object-contain p-1"
              />
            </div>
          ) : (
            /* BROCHURE */

            <div className="flex h-12 w-12 items-center justify-center border border-[#d9d9d9] bg-white">
              <FileText
                size={22}
                className="text-[#092542]"
              />
            </div>
          )}

          {/* FILE NAME */}

          <div className="min-w-0 flex-1">
            <p
              className="truncate text-[11px] text-[#222]"
              title={fileName}
            >
              {fileName}
            </p>

            <p className="text-[9px] text-[#777]">
              {name === "companyLogo"
                ? "Company logo"
                : "Company brochure / JD"}
            </p>
          </div>

          {/* REMOVE */}

          <button
            type="button"
            onClick={removeFile}
            className="pointer-events-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#ddd] bg-white text-[#555] transition hover:border-red-500 hover:text-red-500"
            aria-label="Remove file"
          >
            <X size={13} />
          </button>

        </div>
      )}
    </FormField>
  );
}


// =========================================================
// INPUT CLASS
// =========================================================

function getInputClass(
  hasError: boolean,
) {
  return `${inputClass} ${
    hasError
      ? "border-red-500 focus:border-red-500"
      : "border-[#d9d9d9]"
  }`;
}


// =========================================================
// SELECT CLASS
// =========================================================

function getSelectClass(
  hasError: boolean,
) {
  return `${selectClass} ${
    hasError
      ? "border-red-500 focus:border-red-500"
      : "border-[#d9d9d9]"
  }`;
}