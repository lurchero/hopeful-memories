import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import GetInvolved from "../../components/GetInvolved";
import CreativeApplicationForm from "../../components/CreativeApplicationForm";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Get Involved — Hopeful Memories",
  description:
    "Donate, apply as a creative, or become a partner. There are many ways to support Hopeful Memories and the communities we serve.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        label="Get Involved"
        title="There Are Many Ways to Be Part of This"
        description="Whether through giving, creating, or partnering — your involvement directly supports dignified storytelling and the people who make it possible."
      />
      <GetInvolved showHeader={false} />
      <CreativeApplicationForm />
      <ContactForm />
    </>
  );
}
