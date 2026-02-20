import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";

export default function HomeCTA() {
  return (
    <SectionWrapper bg="light" className="relative overflow-hidden">
      {/* Subtle pastel gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,129,143,0.06)_0%,_transparent_50%),radial-gradient(ellipse_at_top_right,_rgba(123,168,130,0.05)_0%,_transparent_50%)]" />

      <div className="relative max-w-[700px] mx-auto text-center">
        <SectionLabel text="Support the Mission" align="center" />

        <h2 className="mt-6 font-serif font-semibold text-2xl md:text-4xl text-primary leading-tight">
          Be Part of the Story
        </h2>

        <p className="mt-6 text-base md:text-lg text-neutral-600 leading-relaxed">
          Whether you give, create, or partner — your support directly funds
          free portrait sessions, pays creative professionals, and builds
          programs that honor community through storytelling.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button text="Donate Now" variant="filled" href="/donate" />
          <Button text="Get Involved" variant="outline" href="/get-involved" />
        </div>
      </div>
    </SectionWrapper>
  );
}
