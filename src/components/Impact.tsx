import Image from "next/image";
import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";

const stats = [
  { value: "500+", label: "Families Served", color: "text-rose-400" },
  { value: "75+", label: "Photographers Paid", color: "text-gold-400" },
  { value: "30+", label: "Community Events", color: "text-sage-400" },
  { value: "12", label: "Partner Organizations", color: "text-sky-400" },
];

export default function Impact({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <SectionWrapper bg="dark" id="impact">
      <div className="text-center">
        {showHeader && (
          <>
            <SectionLabel text="Our Impact" align="center" />

            <h2 className="mt-6 font-serif font-semibold text-2xl md:text-4xl text-secondary leading-tight">
              The Work in Numbers
            </h2>

            <p className="mt-4 text-base text-neutral-400 max-w-[600px] mx-auto leading-relaxed">
              Every number represents a real family, a real creative, a real moment
              preserved with care.
            </p>
          </>
        )}

        {/* Impact photo strip - center hero */}
        <div className={`${showHeader ? "mt-12" : "mt-0"} flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-center`}>
          {[
            { src: "/images/impact/IMG_0069.jpg", alt: "Impact moment from Hopeful Memories", hero: false },
            { src: "/images/impact/IMG_4512.JPG", alt: "Community impact photographed by Hopeful Memories", hero: true },
            { src: "/images/impact/IMG_3434.jpg", alt: "Storytelling impact with Hopeful Memories", hero: false },
          ].map((photo) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden ${
                photo.hero
                  ? 'w-full md:w-[420px] aspect-[4/5] shadow-xl'
                  : 'w-full md:w-[280px] aspect-[3/2] opacity-90'
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes={photo.hero ? '420px' : '280px'}
              />
            </div>
          ))}
        </div>

        <div className={`mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12`}>
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
      </div>
    </SectionWrapper>
  );
}
