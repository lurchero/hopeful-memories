import Link from "next/link";
import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";
import ReadMore from "./ReadMore";

const cardColors = [
  "border-l-rose-200",
  "border-l-gold-200",
  "border-l-sage-200",
  "border-l-sky-200",
];

const programs = [
  {
    title: "Family Portrait Experiences",
    description:
      "Free, professional portrait sessions for families and communities in need.",
  },
  {
    title: "Creative Workforce",
    description:
      "Paid opportunities for photographers and videographers doing meaningful work.",
  },
  {
    title: "Youth Mentorship",
    description:
      "Creative education and mentorship for young storytellers.",
  },
  {
    title: "Community Storytelling",
    description:
      "Public exhibits and documentary projects celebrating community narratives.",
  },
];

export default function ProgramsPreview() {
  return (
    <SectionWrapper bg="light" id="programs-preview">
      <SectionLabel text="Our Programs" />

      <h2 className="mt-6 font-serif font-semibold text-2xl md:text-4xl text-primary leading-tight">
        What We Do
      </h2>

      <p className="mt-4 text-base text-neutral-600 max-w-[600px] leading-relaxed">
        Interconnected programs working toward one goal — dignified storytelling
        that sustains both community and craft.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {programs.map((program, i) => (
          <div
            key={program.title}
            className={`border border-warm-200 border-l-4 ${cardColors[i]} bg-white p-6 md:p-8`}
          >
            <h3 className="font-sans text-lg font-medium text-primary">
              {program.title}
            </h3>
            <ReadMore
              text={program.description}
              className="mt-3 text-sm text-neutral-600 leading-relaxed"
            />
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/programs"
          className="text-accent text-sm font-medium underline-offset-4 hover:underline transition-colors duration-300"
        >
          View all programs →
        </Link>
      </div>
    </SectionWrapper>
  );
}
