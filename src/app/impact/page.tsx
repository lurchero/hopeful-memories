import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import Impact from "../../components/Impact";
import SectionWrapper from "../../components/SectionWrapper";
import SectionLabel from "../../components/SectionLabel";

export const metadata: Metadata = {
  title: "Impact — Hopeful Memories",
  description:
    "See the measurable impact of Hopeful Memories: families served, photographers paid, community events, and partner organizations.",
};

const stories = [
  {
    quote:
      "Having professional portraits of our family meant more than I can express. It was the first time we felt truly seen.",
    attribution: "— Program participant, 2024",
    borderColor: "border-l-rose-300",
  },
  {
    quote:
      "Hopeful Memories gave me my first paid photography gig. It changed how I saw my own career path.",
    attribution: "— Community photographer, 2025",
    borderColor: "border-l-sage-300",
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        label="Our Impact"
        title="Real Numbers. Real Stories. Real Change."
        description="Every portrait session, every paid creative opportunity, and every community event is a step toward dignified storytelling at scale."
      />
      <Impact showHeader={false} />

      {/* Stories section */}
      <SectionWrapper bg="warm">
        <div className="max-w-[800px] mx-auto">
          <SectionLabel text="Stories" align="center" />
          <h2 className="mt-6 font-serif font-semibold text-2xl md:text-3xl text-primary leading-tight text-center">
            Voices from the Community
          </h2>

          <div className="mt-12 space-y-10">
            {stories.map((story) => (
              <blockquote
                key={story.attribution}
                className={`border-l-4 ${story.borderColor} pl-6 md:pl-8`}
              >
                <p className="text-base md:text-lg text-primary leading-relaxed italic">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <footer className="mt-3 text-sm text-neutral-500">
                  {story.attribution}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </SectionWrapper>

    </>
  );
}
