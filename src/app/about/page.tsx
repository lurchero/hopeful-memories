import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import SectionWrapper from "../../components/SectionWrapper";
import SectionLabel from "../../components/SectionLabel";

export const metadata: Metadata = {
  title: "About — Hopeful Memories",
  description:
    "Learn about Hopeful Memories — our founding story, mission, and the team behind dignified storytelling for families and communities.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="The Story Behind the Mission"
        description="Hopeful Memories was founded on a simple belief — every family deserves to be seen, celebrated, and remembered with dignity."
      />

      {/* Founding Story */}
      <SectionWrapper bg="light">
        <div className="max-w-[800px] mx-auto">
          <SectionLabel text="Our Story" />
          <h2 className="mt-6 font-serif font-semibold text-2xl md:text-3xl text-primary leading-tight">
            How It Started
          </h2>
          <div className="mt-6 space-y-4 text-base text-neutral-600 leading-relaxed">
            <p>
              [PLACEHOLDER — Share the founding story here. What moment or
              experience inspired Hopeful Memories? What gap did you see in the
              community that needed to be filled?]
            </p>
            <p>
              [PLACEHOLDER — Describe the early days. How did the first portrait
              sessions come together? What was the community response?]
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Who We Are */}
      <SectionWrapper bg="warm">
        <div className="max-w-[800px] mx-auto">
          <SectionLabel text="Who We Are" />
          <h2 className="mt-6 font-serif font-semibold text-2xl md:text-3xl text-primary leading-tight">
            Our Mission & Values
          </h2>
          <div className="mt-6 space-y-4 text-base text-neutral-600 leading-relaxed">
            <p>
              [PLACEHOLDER — Describe the organization&apos;s mission in your own
              words. What drives the work every day? What values guide how you
              operate?]
            </p>
            <p>
              [PLACEHOLDER — Share the vision for the future. Where is Hopeful
              Memories headed? What impact do you want to have in the next few
              years?]
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* The Team */}
      <SectionWrapper bg="light">
        <div className="max-w-[800px] mx-auto">
          <SectionLabel text="The Team" />
          <h2 className="mt-6 font-serif font-semibold text-2xl md:text-3xl text-primary leading-tight">
            The People Behind the Work
          </h2>
          <div className="mt-6 space-y-4 text-base text-neutral-600 leading-relaxed">
            <p>
              [PLACEHOLDER — Introduce the founder(s) and key team members. Share
              their backgrounds, roles, and what connects them to this mission.]
            </p>
            <p>
              [PLACEHOLDER — Add a team photo or individual headshots here. You
              can place images in public/images/about/ and reference them with
              Next.js Image component.]
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
