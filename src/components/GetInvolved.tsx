import Image from "next/image";
import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";
import ReadMore from "./ReadMore";

const pathwayColors = ["bg-rose-400", "bg-sage-400", "bg-gold-400"];

const pathways = [
  {
    title: "Donate",
    description:
      "Your contribution directly funds free portrait sessions for families, pays creative professionals, and sustains our community programs.",
    cta: "Make a Donation",
    href: "/donate",
    image: "/images/get-involved/IMG_5498.jpg",
  },
  {
    title: "Apply as a Creative",
    description:
      "We're always looking for photographers, videographers, and storytellers who want to do meaningful, paid work in their communities.",
    cta: "Apply Now",
    href: "/get-involved#creative-application",
    image: "/images/IMG_7041.jpg",
  },
  {
    title: "Become a Partner",
    description:
      "Organizations and corporations can partner with Hopeful Memories for structured, measurable social impact through visual storytelling.",
    cta: "Start a Conversation",
    href: "/get-involved#contact",
    image: "/images/IMG_9734.jpg",
  },
];

export default function GetInvolved({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <SectionWrapper bg="light" id="get-involved" className="relative">
      {/* Subtle accent wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.02] via-transparent to-transparent pointer-events-none" />
      {showHeader && (
        <div className="text-center">
          <SectionLabel text="Get Involved" align="center" />

          <h2 className="mt-6 font-serif font-semibold text-2xl md:text-4xl text-primary leading-tight">
            Be Part of the Story
          </h2>

          <p className="mt-4 text-base text-neutral-600 max-w-[600px] mx-auto leading-relaxed">
            There are many ways to support the mission — whether through giving,
            creating, or partnering.
          </p>
        </div>
      )}

      <div className={`${showHeader ? "mt-12" : ""} grid grid-cols-1 md:grid-cols-3 gap-6`}>
        {pathways.map((pathway, i) => (
          <div
            key={pathway.title}
            className="border border-warm-200 bg-white overflow-hidden flex flex-col"
          >
            {/* Card image - Donate card taller for emphasis */}
            <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[4/3]' : 'aspect-[16/9]'}`}>
              <Image
                src={pathway.image}
                alt={pathway.title}
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={`absolute bottom-0 left-0 right-0 h-2 ${pathwayColors[i]}`} />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h3 className="font-sans text-lg font-medium text-primary">
                {pathway.title}
              </h3>
              <ReadMore
                text={pathway.description}
                className="mt-3 text-sm text-neutral-600 leading-relaxed flex-1"
              />
              <div className="mt-6">
                <Button
                  text={pathway.cta}
                  variant={i === 0 ? "filled" : "outline"}
                  href={pathway.href}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
