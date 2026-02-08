import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";

const pathways = [
  {
    title: "Donate",
    description:
      "Your contribution directly funds free portrait sessions for families, pays creative professionals, and sustains our community programs.",
    cta: "Make a Donation",
    href: "#donate",
  },
  {
    title: "Apply as a Creative",
    description:
      "We're always looking for photographers, videographers, and storytellers who want to do meaningful, paid work in their communities.",
    cta: "Apply Now",
    href: "#contact",
  },
  {
    title: "Become a Partner",
    description:
      "Organizations and corporations can partner with Hopeful Memories for structured, measurable social impact through visual storytelling.",
    cta: "Start a Conversation",
    href: "#contact",
  },
];

export default function GetInvolved() {
  return (
    <SectionWrapper bg="light" id="get-involved">
      <div className="text-center">
        <SectionLabel text="Get Involved" />

        <h2 className="mt-6 font-serif font-semibold text-2xl md:text-4xl text-primary leading-tight">
          Be Part of the Story
        </h2>

        <p className="mt-4 text-base text-neutral-600 max-w-[600px] mx-auto leading-relaxed">
          There are many ways to support the mission — whether through giving,
          creating, or partnering.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {pathways.map((pathway) => (
          <div
            key={pathway.title}
            className="border border-warm-200 bg-white p-6 md:p-8 flex flex-col"
          >
            <h3 className="font-sans text-lg font-medium text-primary">
              {pathway.title}
            </h3>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed flex-1">
              {pathway.description}
            </p>
            <div className="mt-6">
              <Button text={pathway.cta} variant="outline" href={pathway.href} />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
