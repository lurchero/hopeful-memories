"use client";

import { useState } from "react";
import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <SectionWrapper bg="dark" className="relative overflow-hidden">
      {/* Subtle color wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(123,168,130,0.05)_0%,_transparent_60%)]" />

      <div className="relative max-w-[500px] mx-auto text-center">
        <SectionLabel text="Stay Connected" align="center" />

        <h2 className="mt-6 font-serif font-semibold text-2xl md:text-3xl text-secondary leading-tight">
          Join the Community
        </h2>

        <p className="mt-4 text-base text-neutral-400 leading-relaxed">
          Get updates on upcoming programs, events, and stories from the
          community.
        </p>

        <form
          name="newsletter"
          method="POST"
          data-netlify="true"
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 bg-neutral-700/50 border border-neutral-600 text-secondary text-sm px-4 py-3 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent/40"
          />
          <button
            type="submit"
            className="bg-accent text-secondary px-6 py-3 text-sm font-medium uppercase tracking-wide hover:bg-accent/90 transition-all duration-300 hover:-translate-y-[1px]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
