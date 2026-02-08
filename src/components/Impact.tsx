import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";

const stats = [
  { value: "500+", label: "Families Served" },
  { value: "75+", label: "Photographers Paid" },
  { value: "30+", label: "Community Events" },
  { value: "12", label: "Partner Organizations" },
];

export default function Impact() {
  return (
    <SectionWrapper bg="dark" id="impact">
      <div className="text-center">
        <SectionLabel text="Our Impact" />

        <h2 className="mt-6 font-serif font-semibold text-2xl md:text-4xl text-secondary leading-tight">
          The Work in Numbers
        </h2>

        <p className="mt-4 text-base text-neutral-400 max-w-[600px] mx-auto leading-relaxed">
          Every number represents a real family, a real creative, a real moment
          preserved with care.
        </p>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl md:text-5xl font-semibold text-secondary">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-neutral-400 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Accent divider */}
        <div className="mt-14 mx-auto w-12 h-px bg-accent" />
      </div>
    </SectionWrapper>
  );
}
