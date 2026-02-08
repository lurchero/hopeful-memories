"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

export default function EmailSignup() {
  const [email, setEmail] = useState("");

  return (
    <SectionWrapper bg="dark">
      <div className="max-w-[600px] mx-auto text-center">
        <h3 className="font-serif font-semibold text-xl md:text-2xl text-secondary">
          Stay Connected
        </h3>

        <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
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
            className="flex-1 bg-neutral-900 border border-neutral-700 text-secondary text-sm px-4 py-3 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent/40"
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
