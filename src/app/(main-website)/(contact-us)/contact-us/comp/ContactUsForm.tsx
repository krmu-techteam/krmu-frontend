"use client";

import { FETCH_STRAPI_URL } from "@/app/constant";
import { useState } from "react";

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
  agree?: string;
};

const ContactUsForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    agree: false,
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // ---------------- CHANGE HANDLER ----------------
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error on change
    setErrors((prev) => ({ ...prev, [name]: undefined }));
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: form,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess("Thank you! Your application has been submitted.");
      setForm({
        name: "",
        email: "",
        phone: "",
        agree: false,
      });
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="Reach-Out-to-Us-form">
        <div className="title">
          <p>Reach Out to Us</p>
        </div>

        {/* Name */}
        <div className="field name">
          <label className="field_label">Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="field_text"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="field email">
          <label className="field_label">E-Mail ID:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="field_email"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="field phone">
          <label className="field_label">Mobile Number:</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="field_phone"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Checkbox */}
        <div className="field checkbox">
          <label className="flex gap-2 items-start">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />
            <span>
              I agree to receive information from{" "}
              <strong>KR Mangalam University</strong>
            </span>
          </label>
          {errors.agree && (
            <p className="text-red-600 text-sm mt-1">{errors.agree}</p>
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

        {/* Messages */}
        {success && <p className="text-green-600 pt-3">{success}</p>}
        {error && <p className="text-red-600 pt-3">{error}</p>}
      </div>
    </form>
  );
};

export default ContactUsForm;
