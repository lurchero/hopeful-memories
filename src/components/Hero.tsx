import SectionWrapper from "./SectionWrapper";
import Button from "./Button";

export default function Hero() {
  return (
    <SectionWrapper bg="light" className="pt-28 md:pt-36 pb-24 md:pb-32">
      <div className="max-w-[800px]">
        <h1 className="font-serif font-semibold leading-[1.1] tracking-[-0.01em] text-[clamp(40px,6vw,72px)] text-primary">
          Capturing Memories.
          <br />
          Honoring Lives.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-[640px] leading-relaxed">
          Hopeful Memories creates dignified photographic experiences for
          families and communities while sustaining the creative workforce
          through meaningful, paid storytelling work.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button text="Donate" variant="filled" href="#donate" />
          <Button text="Get Involved" variant="outline" href="#get-involved" />
        </div>
      </div>
    </SectionWrapper>
  );
}
