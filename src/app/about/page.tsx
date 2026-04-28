import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import SectionWrapper from "../../components/SectionWrapper";
import SectionLabel from "../../components/SectionLabel";

export const metadata: Metadata = {
  title: "About — Hopeful Memories",
  description:
    "Hopeful Memories is an Atlanta-based nonprofit founded by Deshann Reed, creating dignified photographic experiences for families while sustaining the creative workforce.",
  openGraph: {
    title: "About — Hopeful Memories",
    description:
      "An Atlanta nonprofit creating dignified photographic experiences for families and sustaining the creatives who make the work possible.",
    images: ["/images/hero/IMG_1750.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Hopeful Memories",
    description:
      "An Atlanta nonprofit creating dignified photographic experiences for families and sustaining the creatives who make the work possible.",
    images: ["/images/hero/IMG_1750.jpg"],
  },
};

const values = [
  {
    title: "Dignity First",
    body:
      "Every family who steps in front of our cameras deserves to feel seen, respected, and at ease. Dignity is not a finishing touch — it shapes how we plan, how we shoot, and how we share the work afterward.",
    accent: "border-l-rose-200",
  },
  {
    title: "Pay the Creatives",
    body:
      "Photographers, videographers, and editors are professionals. Hopeful Memories exists in part to make sure the people behind the camera are paid fairly for the craft they bring to community work.",
    accent: "border-l-gold-200",
  },
  {
    title: "Community Over Spectacle",
    body:
      "We measure success in relationships, not reach. The neighborhoods, congregations, and partner organizations we serve set the pace — we follow their lead.",
    accent: "border-l-sage-200",
  },
  {
    title: "Memory as Care",
    body:
      "Photographs outlast the moments they capture. We approach every session as a small act of preservation, knowing the images we make today may be the ones a family holds on to longest.",
    accent: "border-l-sky-200",
  },
];

const team = [
  {
    name: "Deshann Reed",
    role: "Founder & Executive Director",
    bio:
      "Deshann founded Hopeful Memories to bring institutional-quality portrait experiences to Atlanta families who are too often left out of the picture. [UPDATE: add 2–3 sentences on Deshann's background, prior work, and what drew them to this mission.]",
  },
  {
    name: "[UPDATE: Board Chair Name]",
    role: "Board Chair",
    bio:
      "[UPDATE: short bio for the board chair — professional background and connection to the mission.]",
  },
  {
    name: "[UPDATE: Creative Director Name]",
    role: "Creative Director",
    bio:
      "[UPDATE: short bio for the creative lead — photography credentials, community work, what they bring to the studio.]",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="Photography in service of the families who deserve to be remembered."
        description="Hopeful Memories is an Atlanta-based nonprofit creating dignified photographic experiences for families and communities — and sustaining the creative workforce that makes that storytelling possible."
      />

      {/* Founding story */}
      <SectionWrapper bg="warm">
        <div className="max-w-[800px] mx-auto">
          <SectionLabel text="Our Story" align="center" />
          <h2 className="mt-6 font-serif font-semibold text-2xl md:text-3xl text-primary leading-tight text-center">
            How Hopeful Memories began.
          </h2>

          <div className="mt-8 space-y-5 text-base md:text-lg text-neutral-600 leading-relaxed">
            <p>
              Hopeful Memories began with a simple observation: the families who
              most deserve to see themselves in beautiful, lasting portraits are
              often the ones least likely to receive them. Studio sessions are
              expensive. Community photography is uneven. And the moments worth
              preserving — a grandmother&apos;s birthday, a child&apos;s first
              communion, a family&apos;s first Sunday in a new home — quietly
              pass without a record.
            </p>
            <p>
              Founder Deshann Reed started Hopeful Memories in Atlanta to close
              that gap. What started as a handful of free portrait sessions in
              partnership with local congregations and community organizations
              grew into something larger: a nonprofit committed both to the
              families in front of the camera and to the photographers and
              videographers behind it.
            </p>
            <p>
              Today, Hopeful Memories partners with churches, schools, shelters,
              and community groups across metro Atlanta to host free portrait
              days, document community gatherings, and pay creative
              professionals fair rates for meaningful work. Every session is an
              affirmation: <em>you were here, you mattered, and your story is
              worth keeping.</em>
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Photo break */}
      <div className="relative w-full h-[300px] md:h-[420px] overflow-hidden">
        <Image
          src="/images/hero/IMG_1750.jpg"
          alt="A Hopeful Memories portrait session in Atlanta"
          fill
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
      </div>

      {/* Mission & values */}
      <SectionWrapper bg="light">
        <div className="max-w-[900px] mx-auto">
          <SectionLabel text="Mission & Values" align="center" />
          <h2 className="mt-6 font-serif font-semibold text-2xl md:text-3xl text-primary leading-tight text-center">
            What we hold to.
          </h2>
          <p className="mt-6 max-w-[640px] mx-auto text-base md:text-lg text-neutral-600 leading-relaxed text-center">
            Our mission is to create dignified photographic experiences for
            families and communities while sustaining the creative workforce
            through meaningful, paid storytelling work. Four values shape how we
            do it.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className={`border border-warm-200 border-l-4 ${value.accent} bg-white p-6 md:p-8`}
              >
                <h3 className="font-serif text-xl font-semibold text-primary">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-neutral-600 leading-relaxed">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper bg="warm">
        <div className="max-w-[900px] mx-auto">
          <SectionLabel text="The Team" align="center" />
          <h2 className="mt-6 font-serif font-semibold text-2xl md:text-3xl text-primary leading-tight text-center">
            The people behind the work.
          </h2>
          <p className="mt-6 max-w-[640px] mx-auto text-base md:text-lg text-neutral-600 leading-relaxed text-center">
            Hopeful Memories is led by a small team of photographers,
            organizers, and community partners committed to making this work
            sustainable for the long run.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-warm-200 p-6 md:p-8"
              >
                <h3 className="font-serif text-lg font-semibold text-primary">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-neutral-500">
                  {member.role}
                </p>
                <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-neutral-500">
            Interested in joining the work?{" "}
            <a
              href="/get-involved"
              className="text-accent underline-offset-4 hover:underline"
            >
              See how to get involved.
            </a>
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
