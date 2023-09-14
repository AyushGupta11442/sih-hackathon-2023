import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/Contact.jpg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={ContactImg} title="Contact" />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
