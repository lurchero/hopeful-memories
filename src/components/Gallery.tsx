import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";

const pieces = [
  { title: "Untitled I", subject: "Family Portrait", year: "2025" },
  { title: "Resonance", subject: "Community Event", year: "2024" },
  { title: "Golden Hour", subject: "Youth Program", year: "2025" },
  { title: "Still Life No. 3", subject: "Family Portrait", year: "2024" },
  { title: "Fragments", subject: "Documentary", year: "2025" },
  { title: "Dusk", subject: "Community Event", year: "2025" },
];

function GalleryPiece({
  title,
  subject,
  year,
}: {
  title: string;
  subject: string;
  year: string;
}) {
  return (
    <div className="relative group">
      {/* Overhead accent light */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-b from-amber-100/[0.07] via-amber-50/[0.03] to-transparent rounded-full blur-md" />

      {/* Framed piece */}
      <div className="relative border border-neutral-700 bg-neutral-900 p-2 shadow-[0_8px_30px_rgba(255,200,120,0.06)] transition-all duration-300 group-hover:shadow-[0_8px_40px_rgba(255,200,120,0.1)]">
        <div
          className="w-full aspect-[3/4] bg-neutral-800 flex items-center justify-center"
          role="img"
          aria-label={`${title} — ${subject}, ${year}`}
        >
          <div className="w-8 h-8 border border-dashed border-neutral-700 rounded-full" />
        </div>
      </div>

      {/* Gallery wall label */}
      <div className="mt-4 px-1">
        <p className="text-sm font-medium text-secondary">{title}</p>
        <p className="text-xs text-neutral-400 mt-0.5">
          {subject} · {year}
        </p>
      </div>

      {/* Under-light reflection */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-gradient-to-t from-amber-100/[0.04] to-transparent rounded-full blur-sm" />
    </div>
  );
}

export default function Gallery() {
  return (
    <SectionWrapper bg="dark" id="gallery" className="bg-neutral-900">
      <SectionLabel text="Gallery" />

      <h2 className="mt-6 font-serif font-semibold text-2xl md:text-4xl text-secondary leading-tight">
        Stories on the Wall
      </h2>

      <p className="mt-4 text-base text-neutral-400 max-w-[600px] leading-relaxed">
        A selection of moments captured through our programs — each one a
        testament to the dignity and beauty of everyday life.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {pieces.map((piece) => (
          <GalleryPiece
            key={piece.title}
            title={piece.title}
            subject={piece.subject}
            year={piece.year}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
