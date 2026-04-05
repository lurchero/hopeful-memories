"use client";

import { useState } from "react";
import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";

export default function CreativeApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    portfolio: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.role) errs.role = "Please select a role";
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
    <SectionWrapper bg="light" id="creative-application">
      <div className="max-w-[600px] mx-auto">
        <SectionLabel text="Apply" />

        <h2 className="mt-6 font-serif font-semibold text-2xl md:text-4xl text-primary leading-tight">
          Apply as a Creative
        </h2>

        <p className="mt-4 text-base text-neutral-600 leading-relaxed">
          We&apos;re looking for photographers, videographers, and storytellers
          who want to do meaningful, paid work in their communities.
        </p>

        <form
          name="creative-application"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >
          <input type="hidden" name="form-name" value="creative-application" />

          <div>
            <label
              htmlFor="creative-name"
              className="block text-sm font-medium text-primary mb-2"
            >
              Name
            </label>
            <input
              id="creative-name"
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
              htmlFor="creative-email"
              className="block text-sm font-medium text-primary mb-2"
            >
              Email
            </label>
            <input
              id="creative-email"
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
              htmlFor="creative-role"
              className="block text-sm font-medium text-primary mb-2"
            >
              Role
            </label>
            <select
              id="creative-role"
              name="role"
              value={form.role}
              onChange={(e) => update("role", e.target.value)}
              className={`w-full bg-secondary border text-primary text-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/40 ${
                errors.role ? "border-red-500" : "border-warm-200"
              }`}
            >
              <option value="">Select a role</option>
              <option value="photographer">Photographer</option>
              <option value="videographer">Videographer</option>
              <option value="other">Other</option>
            </select>
            {errors.role && (
              <p className="mt-1 text-xs text-red-600">{errors.role}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="creative-portfolio"
              className="block text-sm font-medium text-primary mb-2"
            >
              Link to Work
            </label>
            <input
              id="creative-portfolio"
              name="portfolio"
              type="url"
              value={form.portfolio}
              onChange={(e) => update("portfolio", e.target.value)}
              placeholder="https://yourportfolio.com"
              className="w-full bg-secondary border border-warm-200 text-primary text-sm px-4 py-3 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>

          <div>
            <label
              htmlFor="creative-message"
              className="block text-sm font-medium text-primary mb-2"
            >
              Message
            </label>
            <textarea
              id="creative-message"
              name="message"
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Tell us about yourself and why you want to work with Hopeful Memories"
              className="w-full bg-secondary border border-warm-200 text-primary text-sm px-4 py-3 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
            />
          </div>

          <Button text="Submit Application" variant="filled" type="submit" />
        </form>
      </div>
    </SectionWrapper>
  );
}
