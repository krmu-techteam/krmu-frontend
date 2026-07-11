"use client";

import { useState, useRef } from "react";

type Props = { jobId: number };

type FormDataType = {
  awsm_applicant_name: string;
  awsm_applicant_phone: string;
  awsm_applicant_email: string;
  awsm_text_1: string;
  awsm_text_4: string;
  awsm_text_5: string;
  awsm_text_6: string;
  awsm_text_2: string;
  awsm_text_3: string;
  awsm_text_7: string;
  awsm_form_privacy_policy: boolean;
};

const initialState: FormDataType = {
  awsm_applicant_name: "",
  awsm_applicant_phone: "",
  awsm_applicant_email: "",
  awsm_text_1: "",
  awsm_text_4: "",
  awsm_text_5: "",
  awsm_text_6: "",
  awsm_text_2: "",
  awsm_text_3: "",
  awsm_text_7: "",
  awsm_form_privacy_policy: false,
};

const backendFieldMap: Record<string, keyof FormDataType> = {
  "Candidate Name": "awsm_applicant_name",
  "Contact No.": "awsm_applicant_phone",
  "Mail ID": "awsm_applicant_email",
};

const allowedTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const JobForm = ({ jobId }: Props) => {
  const [formData, setFormData] = useState<FormDataType>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  /* ================= VALIDATION ================= */

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    Object.entries(formData).forEach(([key, value]) => {
      // if (key !== "awsm_form_privacy_policy" && !value) {
      //   newErrors[key] = "This field is required";
      // }
      if (
        key !== "awsm_form_privacy_policy" &&
        key !== "awsm_text_7" && // ✅ Notice Period is now optional
        !value
      ) {
        newErrors[key] = "This field is required";
      }
    });

    if (!formData.awsm_form_privacy_policy) {
      newErrors.awsm_form_privacy_policy = "You must accept the privacy policy";
    }

    if (!file) {
      newErrors.awsm_file = "Resume is required";
    } else if (!allowedTypes.includes(file.type)) {
      newErrors.awsm_file = "Only PDF, DOC, DOCX allowed";
    } else if (file.size > 5 * 1024 * 1024) {
      newErrors.awsm_file = "File must be less than 5MB";
    }

    setErrors(newErrors);

    // scroll to first error
    if (Object.keys(newErrors).length > 0) {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    return Object.keys(newErrors).length === 0;
  };

  /* ================= INPUT ================= */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploaded = e.target.files?.[0];
    if (!uploaded) return;

    if (!allowedTypes.includes(uploaded.type)) {
      setErrors({ awsm_file: "Only PDF, DOC, DOCX allowed" });
      return;
    }

    setFile(uploaded);
    setErrors((prev) => ({ ...prev, awsm_file: "" }));
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setSuccessMessage("");
    setFormError("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const fd = new FormData();
      fd.append("action", "awsm_applicant_form_submission");
      fd.append("awsm_job_id", jobId.toString());

      Object.entries(formData).forEach(([key, value]) => {
        fd.append(
          key,
          key === "awsm_form_privacy_policy"
            ? value
              ? "yes"
              : ""
            : String(value),
        );
      });

      if (file) fd.append("awsm_file_1", file);

      const response = await fetch("/api/submit-job", {
        method: "POST",
        body: fd,
      });

      const result = await response.json();

      let parsedResponse = result;

      // backend sometimes sends stringified JSON
      if (result.response) {
        parsedResponse = JSON.parse(result.response);
      }

      /* 🔴 HANDLE ERRORS */
      if (parsedResponse?.error?.length) {
        const apiErrors: Record<string, string> = {};
        let globalError = "";

        parsedResponse.error.forEach((msg: string) => {
          const clean = msg.replace(/<[^>]*>/g, "");

          if (clean.includes(":")) {
            const [label, message] = clean.split(":");
            const fieldKey = backendFieldMap[label.trim()];

            if (fieldKey) {
              apiErrors[fieldKey] = message.trim();
            } else {
              globalError = clean;
            }
          } else {
            globalError = clean;
          }
        });

        setErrors(apiErrors);
        setFormError(globalError || "Something went wrong.");
        return;
      }

      /* 🟢 SUCCESS */
      setSuccessMessage("Your application has been submitted successfully.");

      setFormData(initialState);
      setErrors({});
      setFormError("");
      setFile(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      formRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    } catch (err) {
      console.error(err);
      setFormError("Server error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    { label: "Candidate Name", name: "awsm_applicant_name" },
    { label: "Contact No.", name: "awsm_applicant_phone" },
    { label: "Mail ID", name: "awsm_applicant_email", type: "email" },
    { label: "Current Location", name: "awsm_text_1" },
    { label: "Native Location", name: "awsm_text_4" },
    {
      label: "Education with Percentage (Bachelor,Master,P.HD)",
      name: "awsm_text_5",
    },
    { label: "Current Organization", name: "awsm_text_6" },
    { label: "Current Salary", name: "awsm_text_2" },
    { label: "Expected Salary", name: "awsm_text_3" },
    { label: "Notice Period", name: "awsm_text_7" },
  ];

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="p-6 rounded-md shadow"
    >
      <h2 className="text-4xl font-semibold mb-6">Apply for this position</h2>

      {fields.map((field) => (
        <div className="mb-5" key={field.name}>
          <label className="block font-medium mb-2">
            {field.label}{" "}
            {field.name === 'awsm_text_7' ? "" : <span className="text-red-500">*</span>}
          </label>

          <input
            type={field.type || "text"}
            name={field.name}
            value={(formData as any)[field.name]}
            onChange={handleChange}
            className="w-full border rounded px-4 h-[48px]"
          />

          {errors[field.name] && (
            <p className="text-red-600 text-sm mt-1">{errors[field.name]}</p>
          )}
        </div>
      ))}

      {/* FILE */}
      <div className="mb-5">
        <label className="block font-medium mb-2">
          Upload CV/Resume <span className="text-red-500">*</span>
        </label>

        <div
          className="p-4 border-dashed border cursor-pointer rounded text-center hover:bg-gray-50"
          onClick={() => fileInputRef.current?.click()}
        >
          {file ? file.name : "Click to upload (PDF, DOC, DOCX)"}
        </div>

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf,.doc,.docx"
          onChange={handleFileSelect}
        />

        {errors.awsm_file && (
          <p className="text-red-600 text-sm mt-1">{errors.awsm_file}</p>
        )}
      </div>

      {/* PRIVACY */}
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          name="awsm_form_privacy_policy"
          checked={formData.awsm_form_privacy_policy}
          onChange={handleChange}
          className="mr-2"
        />
        <label>
          I agree to the privacy policy <span className="text-red-500">*</span>
        </label>
      </div>

      {errors.awsm_form_privacy_policy && (
        <p className="text-red-600 text-sm mb-4">
          {errors.awsm_form_privacy_policy}
        </p>
      )}

      {/* BUTTON */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`px-10 py-3 rounded-full font-semibold transition
        ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#cb000d] text-white hover:opacity-90"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {/* GLOBAL ERROR */}
      {formError && (
        <div className="mt-3 p-3 bg-red-100 text-red-700 rounded">
          {formError}
        </div>
      )}

      {/* SUCCESS */}
      {successMessage && (
        <div className="mt-3 p-3 bg-green-100 text-green-800 rounded">
          {successMessage}
        </div>
      )}
    </form>
  );
};

export default JobForm;
