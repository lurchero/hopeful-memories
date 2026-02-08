import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";

export default function Mission() {
  return (
    <SectionWrapper bg="light" id="mission">
      <div className="max-w-[800px] mx-auto text-center">
        <SectionLabel text="Our Mission" />

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

        {/* Accent divider */}
        <div className="mt-10 mx-auto w-12 h-px bg-accent" />
      </div>
    </SectionWrapper>
  );
}
