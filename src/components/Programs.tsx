import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";

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
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border border-warm-200 bg-white p-6 md:p-8 last:sm:col-span-2">
      <h3 className="font-sans text-lg font-medium text-primary">{title}</h3>
      <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function Programs() {
  return (
    <SectionWrapper bg="warm" id="programs">
      <SectionLabel text="Our Programs" />

      <h2 className="mt-6 font-serif font-semibold text-2xl md:text-4xl text-primary leading-tight">
        What We Do
      </h2>

      <p className="mt-4 text-base text-neutral-600 max-w-[600px] leading-relaxed">
        Five interconnected programs working toward one goal — dignified
        storytelling that sustains both community and craft.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {programs.map((program) => (
          <ProgramCard
            key={program.title}
            title={program.title}
            description={program.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
