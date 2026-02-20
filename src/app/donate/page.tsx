import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import SectionWrapper from "../../components/SectionWrapper";
import SectionLabel from "../../components/SectionLabel";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title: "Donate — Hopeful Memories",
  description:
    "Support Hopeful Memories with a tax-deductible donation. Every gift funds free portrait sessions, pays creative professionals, and builds community programs.",
};

const givingLevels = [
  {
    amount: "$25",
    impact: "Covers supplies for one family portrait session",
    accent: "border-l-sage-200",
  },
  {
    amount: "$100",
    impact: "Funds a photographer for a half-day community shoot",
    accent: "border-l-sky-200",
  },
  {
    amount: "$250",
    impact: "Sponsors a full family portrait experience",
    accent: "border-l-rose-200",
  },
  {
    amount: "$1,000",
    impact: "Supports a youth mentorship cohort for one month",
    accent: "border-l-gold-200",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHeader
        label="Support the Mission"
        title="Every Gift Creates a Memory"
        description="Your donation funds free portrait sessions for families, pays photographers and videographers for their craft, and builds programs that honor community through storytelling."
      />

      {/* Giving levels */}
      <SectionWrapper bg="light">
        <div className="max-w-[800px] mx-auto">
          <SectionLabel text="Your Impact" align="center" />
          <h2 className="mt-6 font-serif font-semibold text-2xl md:text-3xl text-primary leading-tight text-center">
            What Your Gift Makes Possible
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {givingLevels.map((level) => (
              <div
                key={level.amount}
                className={`border border-warm-200 border-l-4 ${level.accent} bg-white p-6 md:p-8`}
              >
                <p className="font-serif text-3xl font-semibold text-gold-500">
                  {level.amount}
                </p>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  {level.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Photo break */}
      <div className="relative w-full h-[300px] md:h-[420px] overflow-hidden">
        <Image
          src="/images/donate/IMG_1747.jpg"
          alt="A family portrait session with Hopeful Memories"
          fill
          className="object-cover object-[center_25%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
      </div>

      {/* Donation CTA */}
      <SectionWrapper bg="warm">
        <div className="max-w-[600px] mx-auto text-center py-4 md:py-8">
          <h2 className="font-serif font-semibold text-2xl md:text-3xl text-primary leading-tight">
            Ready to Make a Difference?
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Every contribution — no matter the size — directly supports families,
            creatives, and communities.
          </p>
          <div className="mt-8">
            <Button text="Donate Now" variant="filled" href="#" />
          </div>
        </div>
      </SectionWrapper>

      {/* Tax info */}
      <SectionWrapper bg="light">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-base text-neutral-600 leading-relaxed">
            Hopeful Memories, Inc. is a registered 501(c)(3) nonprofit
            organization. All contributions are tax-deductible to the extent
            allowed by law. EIN available upon request.
          </p>
          <p className="mt-4 text-sm text-neutral-500">
            For questions about giving, contact{" "}
            <a
              href="mailto:donate@hopefulmemories.org"
              className="text-accent underline-offset-4 hover:underline"
            >
              donate@hopefulmemories.org
            </a>
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
