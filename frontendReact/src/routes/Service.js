import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import ServiceImg from "../assets/services.webp"
import Footer from "../components/Footer"
import Model from "../components/Model"
function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={ServiceImg} title="Service" />
      <Model />
      <Footer />
    </>
  );
}

export default Service;
