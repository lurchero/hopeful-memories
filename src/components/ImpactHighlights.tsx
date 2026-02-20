import Link from "next/link";
import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";

const stats = [
  { value: "500+", label: "Families Served", color: "text-rose-400" },
  { value: "75+", label: "Photographers Paid", color: "text-gold-400" },
  { value: "30+", label: "Community Events", color: "text-sage-400" },
  { value: "12", label: "Partner Organizations", color: "text-sky-400" },
];

export default function ImpactHighlights() {
  return (
    <SectionWrapper bg="dark" id="impact-highlights">
      <div className="text-center">
        <SectionLabel text="Our Impact" align="center" />

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
              <p className={`font-serif text-4xl md:text-5xl font-semibold ${stat.color}`}>
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-neutral-400 uppercase tracking-[0.15em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/impact"
            className="text-sage-400 text-sm font-medium underline-offset-4 hover:underline transition-colors duration-300"
          >
            See our full impact →
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
