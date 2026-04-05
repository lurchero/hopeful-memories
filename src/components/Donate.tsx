import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";

export default function Donate() {
  return (
    <SectionWrapper bg="warm" id="donate">
      <div className="max-w-[700px] mx-auto text-center">
        <SectionLabel text="Support the Mission" align="center" />

        <h2 className="mt-6 font-serif font-semibold text-2xl md:text-4xl text-primary leading-tight">
          Every Gift Creates a Memory
        </h2>

        <p className="mt-6 text-base md:text-lg text-neutral-600 leading-relaxed">
          Your donation funds free portrait sessions for families, pays
          photographers and videographers for their craft, and builds programs
          that honor community through storytelling.
        </p>

        <p className="mt-4 text-base text-neutral-600 leading-relaxed">
          Hopeful Memories is a 501(c)(3) nonprofit organization. All
          contributions are tax-deductible.
        </p>

        <div className="mt-10">
          <Button text="Donate Now" variant="filled" href="mailto:donate@hopefulmemories.org?subject=Donation%20Inquiry" />
        </div>
      </div>
    </SectionWrapper>
  );
}
