"use client";

import { FETCH_STRAPI_URL } from "@/app/constant";
import { FormEvent, useState } from "react";

import FormInput from "@/components/common/FormInput";

export default function FormSection() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setStatus("");

    const form = e.currentTarget;
    const raw = new FormData(form);

    const pdfFile = raw.get("documents_pdf") as File | null;

    if (!pdfFile) {
      setMessage("Please upload required PDF");
      setStatus("error");
      setLoading(false);
      return;
    }

    try {
      /* ================= STEP 1: UPLOAD PDF ================= */
      const uploadData = new FormData();
      uploadData.append("files", pdfFile);

      const uploadRes = await fetch(`${FETCH_STRAPI_URL}/api/upload`, {
        method: "POST",
        body: uploadData,
      });

      const uploadJson = await uploadRes.json();
      const uploadedFileId = uploadJson?.[0]?.id;

      if (!uploadedFileId) {
        throw new Error("File upload failed");
      }

      /* ================= STEP 2: CREATE ENTRY ================= */
      const entryData = new FormData();

      const fields = [
        "first_name",
        "last_name",
        "date_of_birth",
        "gender",
        "email",
        "phone",
        "address_line_1",
        "address_line_2",
        "emergency_phone",
        "emergency_email",
        "emergency_relationship",
        "academic_background",
        "previous_education",
        "institution_name",
        "study_country",
        "study_duration",
        "degree_obtained",
        "major_field",
        "language_proficiency",
        "english_test",
        "other_language",
        "intended_programme",
        "degree_programme",
        "programme_major",
        "entry_term",
        "applied_before",
        "referral_source",
        "statement_of_purpose",
      ];

      fields.forEach((field) => {
        const value = raw.get(field);
        if (value) {
          entryData.append(`data[${field}]`, value as string);
        }
      });

      entryData.append(
        "data[declaration_accepted]",
        raw.get("declaration_accepted") ? "true" : "false",
      );

      entryData.append("data[documents_pdf]", String(uploadedFileId));

      const entryRes = await fetch(
        `${FETCH_STRAPI_URL}/api/internation-relation-forms`,
        {
          method: "POST",
          body: entryData,
        },
      );

      if (!entryRes.ok) {
        throw new Error("Entry creation failed");
      }

      setMessage("Form submitted successfully!");
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setMessage("Submission failed. Please try again.");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-8 md:py-12 xl:py-20">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16">
        <div className="w-full bg-[#061623] px-6 py-8 md:p-10 xl:p-12 rounded-[4px]">
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 text-[14px]"
          >
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput
                    name="first_name"
                    placeholder="First Name"
                    required
                  />
                  <FormInput
                    name="last_name"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput type="date" name="date_of_birth" />
                <FormInput type="select" name="gender" label="Gender">
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </FormInput>
              </div>

              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput name="address_line_1" placeholder="Address 1" />
                  <FormInput name="address_line_2" placeholder="Address 2" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput type="email" name="email" placeholder="Email" />
                <FormInput name="phone" placeholder="Phone" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  name="emergency_phone"
                  placeholder="Emergency Phone"
                />
                <FormInput
                  name="emergency_relationship"
                  placeholder="Relationship"
                />
              </div>

              <FormInput
                type="email"
                name="emergency_email"
                placeholder="Emergency Email"
              />

              <FormInput
                type="textarea"
                name="statement_of_purpose"
                rows={5}
                placeholder="Statement of Purpose"
              />
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              <FormInput
                name="academic_background"
                placeholder="Academic Background"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  name="previous_education"
                  placeholder="Previous Education"
                />
                <FormInput
                  name="institution_name"
                  placeholder="Institution Name"
                />
                <FormInput name="study_country" placeholder="Country" />
                <FormInput name="study_duration" placeholder="Duration" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  name="degree_obtained"
                  placeholder="Degree Obtained"
                />
                <FormInput name="major_field" placeholder="Major Field" />
                <FormInput
                  name="language_proficiency"
                  placeholder="Language Proficiency"
                />
                <FormInput name="english_test" placeholder="English Test" />
              </div>

              <FormInput name="other_language" placeholder="Other Language" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  name="intended_programme"
                  placeholder="Intended Programme"
                />
                <FormInput
                  name="degree_programme"
                  placeholder="Degree Programme"
                />
                <FormInput
                  name="programme_major"
                  placeholder="Programme Major"
                />
                <FormInput name="entry_term" placeholder="Entry Term" />
              </div>

              <FormInput type="select" name="applied_before">
                <option value="">Applied Before?</option>
                <option>Yes</option>
                <option>No</option>
              </FormInput>

              <FormInput type="select" name="referral_source">
                <option value="">—Please choose an option—</option>
                <option>Online sources</option>
                <option>Offline sources</option>
                <option>Educational events</option>
                <option>Word of mouth</option>
                <option>Search engines</option>
                <option>Recruitment agency</option>
                <option>Government programs</option>
                <option>Other</option>
              </FormInput>

              <p className="text-gray-400 text-sm font-poppins">
                Attach all the required documents in <b>one PDF</b>: Passport
                Copy, Academic Transcripts, English Test Score, SOP,
                Recommendation Letters, etc.
              </p>

              <div className="bg-[#061623] font-poppins border border-dashed border-white/20  rounded-[4px] p-4">
                <FormInput
                  type="file"
                  name="documents_pdf"
                  accept="application/pdf"
                  required
                />
              </div>

              <label className="flex font-poppins items-start gap-2 text-sm text-gray-300 cursor-pointer mt-4">
                <input
                  type="checkbox"
                  name="declaration_accepted"
                  className="mt-1"
                />
                I declare the information is correct
              </label>

              <div className="pt-2">
                <button
                  disabled={loading}
                  className={`w-full font-poppins sm:w-auto sm:min-w-[220px] bg-[#0066CC] hover:bg-[#0055aa] text-white px-10 py-3 rounded-[4px] flex items-center justify-center gap-2 transition
              ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>

                {message && (
                  <p
                    className={`mt-3 text-sm font-medium ${
                      status === "success" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {message}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
