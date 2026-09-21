"use client";

import { FETCH_STRAPI_URL } from "@/app/constant";
import { FormEvent, useState } from "react";

export default function InternationalRelationsForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"success" | "error" | "">(""); // ⭐ NEW

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
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-[1200px] mx-auto border border-gray-300 p-5 md:p-10">
        {/* <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-[14px]"
        >
          <div className="space-y-6">
            <div>
              <label className="label">Full Name</label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="first_name"
                  className="input"
                  placeholder="First Name"
                  required
                />
                <input
                  name="last_name"
                  className="input"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">Date Of Birth</label>
                <input type="date" name="date_of_birth" className="input" />
              </div>
              <div>
                <label className="label">Gender</label>
                <select name="gender" className="input">
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="label">Permanent Address</label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="address_line_1"
                  className="input"
                  placeholder="Address 1"
                />
                <input
                  name="address_line_2"
                  className="input"
                  placeholder="Address 2"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input name="email" className="input" placeholder="Email" />
              <input name="phone" className="input" placeholder="Phone" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                name="emergency_phone"
                className="input"
                placeholder="Emergency Phone"
              />
              <input
                name="emergency_relationship"
                className="input"
                placeholder="Relationship"
              />
            </div>

            <input
              name="emergency_email"
              className="input"
              placeholder="Emergency Email"
            />

            <textarea
              name="statement_of_purpose"
              rows={5}
              className="input"
              placeholder="Statement of Purpose"
            />
          </div>

        
          <div className="space-y-6">
            <input
              name="academic_background"
              className="input"
              placeholder="Academic Background"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <input
                name="previous_education"
                className="input"
                placeholder="Previous Education"
              />
              <input
                name="institution_name"
                className="input"
                placeholder="Institution Name"
              />

              <input
                name="study_country"
                className="input"
                placeholder="Country"
              />
              <input
                name="study_duration"
                className="input"
                placeholder="Duration"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <input
                name="degree_obtained"
                className="input"
                placeholder="Degree Obtained"
              />
              <input
                name="major_field"
                className="input"
                placeholder="Major Field"
              />

              <input
                name="language_proficiency"
                className="input"
                placeholder="Language Proficiency"
              />
              <input
                name="english_test"
                className="input"
                placeholder="English Test"
              />
            </div>

            <input
              name="other_language"
              className="input"
              placeholder="Other Language"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <input
                name="intended_programme"
                className="input"
                placeholder="Intended Programme"
              />
              <input
                name="degree_programme"
                className="input"
                placeholder="Degree Programme"
              />

              <input
                name="programme_major"
                className="input"
                placeholder="Programme Major"
              />
              <input
                name="entry_term"
                className="input"
                placeholder="Entry Term"
              />
            </div>

            <select name="applied_before" className="input">
              <option value="">Applied Before?</option>
              <option>Yes</option>
              <option>No</option>
            </select>

            <select name="referral_source" className="input">
              <option value="">—Please choose an option—</option>
              <option value="Online sources">Online sources</option>
              <option value="Offline sources">Offline sources</option>
              <option value="Educational events">Educational events</option>
              <option value="Word of mouth">Word of mouth</option>
              <option value="Search engines">Search engines</option>
              <option value="Recruitment agency">Recruitment agency</option>
              <option value="Government programs">Government programs</option>
              <option value="Other">Other</option>
            </select>

            <p>
              Statement of Purpose:-
              <br /> (Please provide a brief statement explaining your
              motivation for applying to KR Mangalam University, your academic
              and career goals, and how the chosen program aligns with your
              aspirations.){" "}
            </p>
            <p>
              Please upload the following documents ({" "}
              <b>Attach all the required documents in one PDF</b> ):-
              <br /> Passport Copy, Academic Transcripts, English Proficiency
              Test Score, Statement of Purpose, Letter(s) of Recommendation, Any
              additional supporting documents{" "}
            </p>

            <input
              type="file"
              name="documents_pdf"
              accept="application/pdf"
              required
            />

            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" name="declaration_accepted" />I declare the
              information is correct
            </label>

          
            <div className="relative">
              <button
                disabled={loading}
                className={`w-full #cb000d text-white px-10 py-3 rounded-md flex items-center justify-center gap-2
                  ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {loading && <span className="loader" />} 
                {loading ? "Submitting..." : "Submit"}
              </button>

              
              {message && (
                <p
                  className={`mt-3 text-sm font-medium ${
                    status === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}
            </div>
          </div>
        </form> */}
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 text-[14px]"
        >
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="font-medium mb-1 block">Full Name</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="first_name"
                  className="input w-full"
                  placeholder="First Name"
                  required
                />
                <input
                  name="last_name"
                  className="input w-full"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            {/* DOB + Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-medium mb-1 block">Date Of Birth</label>
                <input
                  type="date"
                  name="date_of_birth"
                  className="input w-full"
                />
              </div>

              <div>
                <label className="font-medium mb-1 block">Gender</label>
                <select name="gender" className="input w-full">
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="font-medium mb-1 block">
                Permanent Address
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="address_line_1"
                  className="input w-full"
                  placeholder="Address 1"
                />
                <input
                  name="address_line_2"
                  className="input w-full"
                  placeholder="Address 2"
                />
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="email"
                className="input w-full"
                placeholder="Email"
              />
              <input
                name="phone"
                className="input w-full"
                placeholder="Phone"
              />
            </div>

            {/* Emergency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="emergency_phone"
                className="input w-full"
                placeholder="Emergency Phone"
              />
              <input
                name="emergency_relationship"
                className="input w-full"
                placeholder="Relationship"
              />
            </div>

            <input
              name="emergency_email"
              className="input w-full"
              placeholder="Emergency Email"
            />

            <textarea
              name="statement_of_purpose"
              rows={5}
              className="input w-full"
              placeholder="Statement of Purpose"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            <input
              name="academic_background"
              className="input w-full"
              placeholder="Academic Background"
            />

            {/* Education */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <input
                name="previous_education"
                className="input w-full"
                placeholder="Previous Education"
              />
              <input
                name="institution_name"
                className="input w-full"
                placeholder="Institution Name"
              />
              <input
                name="study_country"
                className="input w-full"
                placeholder="Country"
              />
              <input
                name="study_duration"
                className="input w-full"
                placeholder="Duration"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <input
                name="degree_obtained"
                className="input w-full"
                placeholder="Degree Obtained"
              />
              <input
                name="major_field"
                className="input w-full"
                placeholder="Major Field"
              />
              <input
                name="language_proficiency"
                className="input w-full"
                placeholder="Language Proficiency"
              />
              <input
                name="english_test"
                className="input w-full"
                placeholder="English Test"
              />
            </div>

            <input
              name="other_language"
              className="input w-full"
              placeholder="Other Language"
            />

            {/* Programme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <input
                name="intended_programme"
                className="input w-full"
                placeholder="Intended Programme"
              />
              <input
                name="degree_programme"
                className="input w-full"
                placeholder="Degree Programme"
              />
              <input
                name="programme_major"
                className="input w-full"
                placeholder="Programme Major"
              />
              <input
                name="entry_term"
                className="input w-full"
                placeholder="Entry Term"
              />
            </div>

            {/* Selects */}
            <select name="applied_before" className="input w-full">
              <option value="">Applied Before?</option>
              <option>Yes</option>
              <option>No</option>
            </select>

            <select name="referral_source" className="input w-full">
              <option value="">—Please choose an option—</option>
              <option>Online sources</option>
              <option>Offline sources</option>
              <option>Educational events</option>
              <option>Word of mouth</option>
              <option>Search engines</option>
              <option>Recruitment agency</option>
              <option>Government programs</option>
              <option>Other</option>
            </select>

            {/* Instructions */}
            <p className="text-gray-600 text-sm">
              Attach all the required documents in <b>one PDF</b>: Passport
              Copy, Academic Transcripts, English Test Score, SOP,
              Recommendation Letters, etc.
            </p>

            {/* File Upload */}
            <input
              type="file"
              name="documents_pdf"
              accept="application/pdf"
              required
              className="input w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-gray-100 file:text-sm"
            />

            {/* Checkbox */}
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" name="declaration_accepted" />I declare the
              information is correct
            </label>

            {/* Button */}
            <div>
              <button
                disabled={loading}
                className={`w-full sm:w-auto sm:min-w-[220px] text-white px-10 py-3 rounded-md flex items-center justify-center gap-2 transition bg-red-700 hover:bg-red-900`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              {message && (
                <p
                  className={`mt-3 text-sm font-medium ${
                    status === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .label {
          font-weight: 500;
          margin-bottom: 6px;
          display: block;
        }
        .input {
          width: 100%;
          border: 1px solid #e5e7eb;
          padding: 10px 12px;
          border-radius: 6px;
        }
        .loader {
          width: 16px;
          height: 16px;
          border: 2px solid white;
          border-top: 2px solid transparent;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}

// "use client";

// import { FormEvent, useState } from "react";

// const STRAPI_URL = "http://localhost:1337";

// export default function InterRelationForm() {
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     const form = e.currentTarget;
//     const raw = new FormData(form);
//     const pdfFile = raw.get("documents_pdf") as File | null;

//     if (!pdfFile) {
//       setMessage("Please select a PDF");
//       setLoading(false);
//       return;
//     }

//     try {
//       /* ---------- STEP 1: UPLOAD FILE ---------- */
//       const uploadData = new FormData();
//       uploadData.append("files", pdfFile);

//       const uploadRes = await fetch(`${STRAPI_URL}/api/upload`, {
//         method: "POST",
//         body: uploadData,
//       });

//       const uploadJson = await uploadRes.json();
//       console.log("Upload response:", uploadJson);

//       // ✅ STRAPI v5 RESPONSE
//       const uploadedFileId = uploadJson?.[0]?.id;

//       if (!uploadedFileId) {
//         throw new Error("No file ID returned from upload");
//       }

//       /* ---------- STEP 2: CREATE ENTRY ---------- */
//       const entryData = new FormData();
//       entryData.append("data[first_name]", raw.get("first_name") as string);
//       entryData.append("data[last_name]", raw.get("last_name") as string);
//       entryData.append("data[email]", raw.get("email") as string);
//       entryData.append("data[phone]", raw.get("phone") as string);

//       // 🔥 STRAPI v5 MEDIA LINKING
//       entryData.append("data[documents_pdf]", String(uploadedFileId));

//       const entryRes = await fetch(`${STRAPI_URL}/api/test-forms`, {
//         method: "POST",
//         body: entryData,
//       });

//       const entryJson = await entryRes.json();
//       console.log("Entry response:", entryJson);

//       if (!entryRes.ok) {
//         throw new Error("Entry creation failed");
//       }

//       setMessage("Form + PDF uploaded successfully ✅");
//       form.reset();
//     } catch (err) {
//       console.error(err);
//       setMessage("Upload failed ❌ Check console logs");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="max-w-xl mx-auto p-6">
//       <h2 className="text-xl font-semibold mb-4">Test Form</h2>

//       <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
//         <input name="first_name" placeholder="First name" required className="w-full border p-2" />
//         <input name="last_name" placeholder="Last name" required className="w-full border p-2" />
//         <input type="email" name="email" placeholder="Email" required className="w-full border p-2" />
//         <input name="phone" placeholder="Phone" required className="w-full border p-2" />
//         <input type="file" name="documents_pdf" accept="application/pdf" required />

//         <button disabled={loading} className="bg-blue-600 text-white px-4 py-2">
//           {loading ? "Submitting..." : "Submit"}
//         </button>

//         {message && <p>{message}</p>}
//       </form>
//     </section>
//   );
// }
