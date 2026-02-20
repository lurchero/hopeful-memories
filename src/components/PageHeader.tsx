import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";

export default function PageHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <SectionWrapper bg="dark" className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
      {/* Atmospheric gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(140,122,107,0.06)_0%,_transparent_60%)]" />

      {/* Color accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 via-gold-400 to-sage-400" />

      <div className="relative max-w-[700px]">
        <SectionLabel text={label} />
        <h1 className="mt-6 font-serif font-semibold text-3xl md:text-5xl text-secondary leading-tight">
          {title}
        </h1>
        <p className="mt-6 text-base md:text-lg text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>
    </SectionWrapper>
  );
}
