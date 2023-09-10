import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/3.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero 
      cName="hero-mid" 
      heroImg={ContactImg} 
      title="Contact" />
    </>
  );
}

export default Contact;
