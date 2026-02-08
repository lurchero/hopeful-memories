import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Programs from "../components/Programs";
import Impact from "../components/Impact";
import Gallery from "../components/Gallery";
import GetInvolved from "../components/GetInvolved";
import Donate from "../components/Donate";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Mission />
        <Programs />
        <Impact />
        <Gallery />
        <GetInvolved />
        <Donate />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
