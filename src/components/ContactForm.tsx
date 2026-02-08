"use client";

import { useState } from "react";
import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      e.preventDefault();
      setErrors(errs);
    }
  }

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  return (
    <SectionWrapper bg="warm" id="contact">
      <div className="max-w-[600px] mx-auto">
        <SectionLabel text="Contact" />

        <h2 className="mt-6 font-serif font-semibold text-2xl md:text-4xl text-primary leading-tight">
          Get in Touch
        </h2>

        <p className="mt-4 text-base text-neutral-600 leading-relaxed">
          Have a question, want to partner, or interested in our programs?
          We&apos;d love to hear from you.
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-primary mb-2"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={`w-full bg-secondary border text-primary text-sm px-4 py-3 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent/40 ${
                errors.name ? "border-red-500" : "border-warm-200"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-primary mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={`w-full bg-secondary border text-primary text-sm px-4 py-3 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent/40 ${
                errors.email ? "border-red-500" : "border-warm-200"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-primary mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className={`w-full bg-secondary border text-primary text-sm px-4 py-3 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none ${
                errors.message ? "border-red-500" : "border-warm-200"
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-600">{errors.message}</p>
            )}
          </div>

          <Button text="Send Message" variant="filled" type="submit" />
        </form>
      </div>
    </SectionWrapper>
  );
}
