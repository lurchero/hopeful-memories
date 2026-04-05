import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import SectionWrapper from "../../components/SectionWrapper";

export const metadata: Metadata = {
  title: "Gallery — Hopeful Memories",
  description:
    "A collection of moments captured through Hopeful Memories programs — portraits, community events, and documentary work celebrating everyday life.",
};

const pieces = [
  { title: "Untitled I", subject: "Family Portrait", year: "2025", src: "/images/gallery/IMG_3010.jpg", isHero: true },
  { title: "Resonance", subject: "Community Event", year: "2024", src: "/images/gallery/IMG_1648.jpg", isHero: false },
  { title: "Golden Hour", subject: "Youth Program", year: "2025", src: "/images/gallery/IMG_2828.jpg", isHero: false },
  { title: "Still Life No. 3", subject: "Family Portrait", year: "2024", src: "/images/gallery/IMG_3892.jpg", isHero: false },
  { title: "Fragments", subject: "Documentary", year: "2025", src: "/images/gallery/IMG_8331.jpg", isHero: false },
  { title: "Dusk", subject: "Community Event", year: "2025", src: "/images/gallery/1F4CD5E5-FF82-496E-827A-721F42D20D6B.jpg", isHero: false },
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
    <div className={`relative group ${isHero ? "lg:col-span-2 lg:row-span-2" : ""}`}>
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-b from-amber-100/[0.07] via-amber-50/[0.03] to-transparent rounded-full blur-md" />

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

      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-gradient-to-t from-amber-100/[0.04] to-transparent rounded-full blur-sm" />
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        label="Gallery"
        title="Stories on the Wall"
        description="A collection of moments captured through our programs — each one a testament to the dignity and beauty of everyday life."
      />

      <SectionWrapper bg="dark" className="relative bg-neutral-900">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-transparent pointer-events-none" />

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
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
      </SectionWrapper>
    </>
  );
}
