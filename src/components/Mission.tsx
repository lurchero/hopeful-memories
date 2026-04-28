import Image from "next/image";
import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";

export default function Mission() {
  return (
    <SectionWrapper bg="warm" id="mission" className="py-24 md:py-32">
      <div className="max-w-[800px] mx-auto text-center">
        <SectionLabel text="Our Mission" align="center" />

        <h2 className="mt-6 font-serif font-semibold text-2xl md:text-4xl text-primary leading-tight">
          Dignity through storytelling.
        </h2>

        <div className="mt-6 max-w-[640px] mx-auto space-y-4">
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
            Every family deserves to be seen. Every story deserves to be told
            with care. Hopeful Memories exists to create space where dignified
            photography meets community — where memories become affirmations of
            worth, presence, and belonging.
          </p>
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
            We believe that storytelling is a form of healing, and that the
            people behind the camera deserve to be sustained by their craft. Our
            work supports both — the families we serve and the creatives who
            make the work possible.
          </p>
        </div>

        {/* Accent divider — gradient */}
        <div className="mt-10 mx-auto w-32 h-1 bg-gradient-to-r from-rose-400 via-gold-400 to-sage-400 rounded-full" />

        {/* Photo strip */}
        <div className="mt-12 grid grid-cols-3 gap-3 md:gap-4">
          {[
            { src: "/images/mission/IMG_9431.jpg", alt: "A family moment captured by Hopeful Memories", dominant: false },
            { src: "/images/mission/IMG_9445.jpg", alt: "Community gathering photographed by Hopeful Memories", dominant: true },
            { src: "/images/mission/IMG_9524.jpg", alt: "Portrait session with Hopeful Memories", dominant: false },
          ].map((photo, i) => (
            <div
              key={photo.src}
              className={`relative aspect-[4/5] overflow-hidden transition-all duration-300 ${
                photo.dominant ? 'scale-105 z-10 shadow-lg' : 'hover:scale-[1.02]'
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover grayscale contrast-110 brightness-105"
                sizes="(max-width: 768px) 33vw, 250px"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
