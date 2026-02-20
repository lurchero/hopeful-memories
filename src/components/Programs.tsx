import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";
import ReadMore from "./ReadMore";

const cardColors = [
  "border-l-rose-400",
  "border-l-gold-400",
  "border-l-sage-400",
  "border-l-sky-400",
  "border-l-rose-400",
];

const programs = [
  {
    title: "Family Portrait Experiences",
    description:
      "Free, professional portrait sessions for families and communities in need — creating lasting memories with dignity and care.",
  },
  {
    title: "Creative Workforce",
    description:
      "Paid opportunities for photographers and videographers to do meaningful storytelling work while building sustainable creative careers.",
  },
  {
    title: "Youth Mentorship",
    description:
      "Creative education and mentorship programs that equip young people with the skills, confidence, and vision to tell their own stories.",
  },
  {
    title: "Community Storytelling",
    description:
      "Public exhibits, documentary features, and storytelling projects that celebrate community narratives and cultural identity.",
  },
  {
    title: "Corporate Partnerships",
    description:
      "Structured partnerships with measurable social impact — connecting organizations to communities through the power of visual storytelling.",
  },
];

function ProgramCard({
  title,
  description,
  colorClass,
}: {
  title: string;
  description: string;
  colorClass: string;
}) {
  return (
    <div className={`border border-warm-200 border-l-4 ${colorClass} bg-white p-6 md:p-8`}>
      <h3 className="font-sans text-lg font-medium text-primary">{title}</h3>
      <ReadMore
        text={description}
        className="mt-3 text-sm text-neutral-600 leading-relaxed"
      />
    </div>
  );
}

export default function Programs({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <SectionWrapper bg="warm" id="programs">
      {showHeader && (
        <>
          <SectionLabel text="Our Programs" />

          <h2 className="mt-6 font-serif font-semibold text-2xl md:text-4xl text-primary leading-tight">
            What We Do
          </h2>

          <p className="mt-4 text-base text-neutral-600 max-w-[600px] leading-relaxed">
            Five interconnected programs working toward one goal — dignified
            storytelling that sustains both community and craft.
          </p>
        </>
      )}

      <div className={`${showHeader ? "mt-12" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
        {programs.map((program, i) => (
          <ProgramCard
            key={program.title}
            title={program.title}
            description={program.description}
            colorClass={cardColors[i]}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
