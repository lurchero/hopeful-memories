import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";

export default function Hero() {
  return (
    <SectionWrapper bg="dark" className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
      {/* Atmospheric gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,168,76,0.06)_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(212,129,143,0.04)_0%,_transparent_50%)]" />

      <div className="relative flex flex-col md:flex-row md:items-center md:gap-16">
        {/* Text */}
        <div className="flex-1 max-w-[600px]">
          <h1 className="font-serif font-bold leading-[1.1] tracking-[-0.02em] text-[clamp(42px,6vw,76px)] text-secondary">
            Capturing Memories.
            <br />
            Honoring Lives.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-[540px] leading-relaxed">
            Hopeful Memories creates dignified photographic experiences for
            families and communities while sustaining the creative workforce
            through meaningful, paid storytelling work.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button text="Donate" variant="filled" href="/donate" />
            <Button text="Get Involved" variant="outline-light" href="/get-involved" />
          </div>
        </div>

        {/* Hero image — right side on desktop, below text on mobile */}
        <div className="flex-shrink-0 w-full mt-10 md:mt-0 md:w-[380px] lg:w-[440px]">
          <div className="relative aspect-[4/5] border border-neutral-700 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/hero/IMG_1750.jpg"
              alt="A family portrait captured by Hopeful Memories"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 380px, 440px"
            />
            {/* Warm edge vignette */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
