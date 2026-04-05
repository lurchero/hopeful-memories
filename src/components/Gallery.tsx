import Image from "next/image";
import Link from "next/link";
import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";

const pieces = [
  { title: "Untitled I", subject: "Family Portrait", year: "2025", src: "/images/gallery/IMG_3010.jpg", isHero: true },
  { title: "Resonance", subject: "Community Event", year: "2024", src: "/images/gallery/IMG_1648.jpg", isHero: false },
  { title: "Golden Hour", subject: "Youth Program", year: "2025", src: "/images/gallery/IMG_2828.jpg", isHero: false },
];

function GalleryPiece({
  title,
  subject,
  year,
  src,
  isHero = false,
}: {
  title: string;
  subject: string;
  year: string;
  src: string;
  isHero?: boolean;
}) {
  return (
    <div className={`relative group ${isHero ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
      {/* Overhead accent light */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-b from-amber-100/[0.07] via-amber-50/[0.03] to-transparent rounded-full blur-md" />

      {/* Framed piece */}
      <div className="relative border border-neutral-700 bg-neutral-900 p-2 shadow-[0_8px_30px_rgba(255,200,120,0.06)] transition-all duration-300 group-hover:shadow-[0_8px_40px_rgba(255,200,120,0.1)]">
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-800">
          <Image
            src={src}
            alt={`${title} — ${subject}, ${year}`}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Under-light reflection */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-gradient-to-t from-amber-100/[0.04] to-transparent rounded-full blur-sm" />
    </div>
  );
}

export default function Gallery() {
  return (
    <SectionWrapper bg="dark" id="gallery" className="relative bg-neutral-900 border-t border-neutral-700">
      {/* Warm ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-transparent pointer-events-none" />
      <SectionLabel text="Gallery" />

      <h2 className="mt-6 font-serif font-bold text-2xl md:text-4xl text-secondary leading-tight tracking-tight">
        Stories on the Wall
      </h2>

      <p className="mt-4 text-base text-neutral-400 max-w-[600px] leading-relaxed">
        A selection of moments captured through our programs — each one a
        testament to the dignity and beauty of everyday life.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {pieces.map((piece) => (
          <GalleryPiece
            key={piece.title}
            title={piece.title}
            subject={piece.subject}
            year={piece.year}
            src={piece.src}
            isHero={piece.isHero}
          />
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/gallery"
          className="text-accent text-sm font-medium underline-offset-4 hover:underline transition-colors duration-300"
        >
          View full gallery →
        </Link>
      </div>

      {/* Transition element */}
      <div className="mt-16 mx-auto w-full max-w-[200px] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </SectionWrapper>
  );
}
