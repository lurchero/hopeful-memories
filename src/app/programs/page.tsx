import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import Programs from "../../components/Programs";
import Button from "../../components/Button";
import SectionWrapper from "../../components/SectionWrapper";
import SectionLabel from "../../components/SectionLabel";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore our programs: free family portraits, paid creative opportunities, youth mentorship, community storytelling, and corporate partnerships.",
  openGraph: {
    title: "Programs — Hopeful Memories",
    description:
      "Explore our programs: free family portraits, paid creative opportunities, youth mentorship, community storytelling, and corporate partnerships.",
    images: ["/images/programs/IMG_5560.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programs — Hopeful Memories",
    description:
      "Explore our programs: free family portraits, paid creative opportunities, youth mentorship, community storytelling, and corporate partnerships.",
    images: ["/images/programs/IMG_5560.jpg"],
  },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        label="Our Programs"
        title="Storytelling That Sustains Community and Craft"
        description="Five interconnected programs working toward dignified photography experiences, a thriving creative workforce, and lasting community impact."
      />
      <Programs showHeader={false} />

      {/* Photo break */}
      <div className="relative w-full h-[340px] md:h-[480px] overflow-hidden">
        <Image
          src="/images/programs/IMG_5560.jpg"
          alt="Hopeful Memories program in action"
          fill
          className="object-cover object-[center_25%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
      </div>

      <SectionWrapper bg="light">
        <div className="max-w-[600px] mx-auto text-center">
          <SectionLabel text="Join Us" align="center" />
          <h2 className="mt-6 font-serif font-semibold text-2xl md:text-3xl text-primary leading-tight">
            Want to be part of a program?
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Whether you&apos;re a family looking for a portrait experience, a
            creative seeking meaningful work, or an organization wanting to
            partner — we&apos;d love to connect.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button text="Get Involved" variant="filled" href="/get-involved" />
            <Button text="Donate" variant="outline" href="/donate" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
