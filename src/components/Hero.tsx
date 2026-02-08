import SectionWrapper from "./SectionWrapper";
import Button from "./Button";

export default function Hero() {
  return (
    <SectionWrapper bg="dark" className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
      {/* Atmospheric gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(140,122,107,0.08)_0%,_transparent_60%)]" />

      <div className="relative max-w-[800px]">
        <h1 className="font-serif font-semibold leading-[1.1] tracking-[-0.01em] text-[clamp(40px,6vw,72px)] text-secondary">
          Capturing Memories.
          <br />
          Honoring Lives.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-[640px] leading-relaxed">
          Hopeful Memories creates dignified photographic experiences for
          families and communities while sustaining the creative workforce
          through meaningful, paid storytelling work.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button text="Donate" variant="filled" href="#donate" />
          <Button text="Get Involved" variant="outline-light" href="#get-involved" />
        </div>
      </div>

      {/* Hero image placeholder */}
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-8 lg:right-16 w-[300px] lg:w-[380px] aspect-[4/5] bg-neutral-700/30 border border-neutral-700/50">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-10 h-10 border border-dashed border-neutral-600 rounded-full" />
        </div>
      </div>
    </SectionWrapper>
  );
}
