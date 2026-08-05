"use client";

import { FETCH_STRAPI_URL } from "@/app/constant";
import { useState } from "react";

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
  programme?: string;
  message?: string;
  agree?: string;
};

const ContactUsForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    programme: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // ---------------- CHANGE HANDLER ----------------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name, value } = target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else if (name === "phone") {
      // Only allow digits and limit to 10
      const numeric = value.replace(/\D/g, "").slice(0, 10);

      setForm((prev) => ({
        ...prev,
        phone: numeric,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  // ---------------- VALIDATION ----------------
  const validate = () => {
    const newErrors: Errors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    // if (!form.programme.trim()) {
    //   newErrors.programme = "Programme of Interest is required";
    // }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!form.agree) {
      newErrors.agree = "You must agree before submitting";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch(`${FETCH_STRAPI_URL}/api/contact-forms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: form,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess("Thank you! Your enquiry has been submitted.");

      setForm({
        name: "",
        email: "",
        phone: "",
        programme: "",
        message: "",
        agree: false,
      });
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="Reach-Out-to-Us-form">
        <div className="title">
          <h1>Reach Out to Us</h1>
        </div>

        {/* Name */}
        <div className="field name">
          <label htmlFor="name" className="field_label">
            Name:
          </label>

          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="field_text"
            autoComplete="name"
          />

          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="field email">
          <label htmlFor="email" className="field_label">
            E-Mail ID:
          </label>

          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="field_email"
            autoComplete="email"
          />

          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="field phone">
          <label htmlFor="phone" className="field_label">
            Mobile Number:
          </label>

          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="field_phone"
            inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength={10}
            autoComplete="tel"
          />

          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Programme */}
        {/* <div className="field programme">
          <label htmlFor="programme" className="field_label">
            Programme of Interest:
          </label>

          <input
            id="programme"
            type="text"
            name="programme"
            value={form.programme}
            onChange={handleChange}
            className="field_text"
          />

          {errors.programme && (
            <p className="text-red-600 text-sm mt-1">
              {errors.programme}
            </p>
          )}
        </div> */}

        {/* Message */}
        {/* <div className="field message">
          <label htmlFor="message" className="field_label">
            Message:
          </label>

          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="field_text"
          />

          {errors.message && (
            <p className="text-red-600 text-sm mt-1">
              {errors.message}
            </p>
          )}
        </div> */}

        {/* Checkbox */}
        <div className="field checkbox">
          <div className="flex gap-2 items-start">
            <input
              id="agree"
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />

            <label htmlFor="agree">
              I agree to receive information from{" "}
              <strong>KR Mangalam University</strong>.
            </label>
          </div>

          {errors.agree && (
            <p className="text-red-600 text-sm mt-1">
              {errors.agree}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="field submit pt-5">
          <button
            type="submit"
            disabled={loading}
            className="field_submit flex items-center justify-center gap-2"
          >
            {loading && (
              <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}

            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>

        {/* Success/Error */}
        {success && (
          <p className="text-green-600 pt-3">{success}</p>
        )}

        {error && (
          <p className="text-red-600 pt-3">{error}</p>
        )}
      </div>
    </form>
  );
};

export default ContactUsForm;