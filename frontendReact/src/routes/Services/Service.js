import { Link } from "react-router-dom"
import ModelData from "../../components/ModelData"
import Model1 from "../../assets/M1.jpg";
import Model2 from "../../assets/M2.jpg";
import Hero from "../../components/Hero"
import ServiceImg from "../../assets/services.webp"
import Footer from "../../components/Footer"
import Model3 from "../../assets/M3.jpg";
import Model4 from "../../assets/M4.jpg";
import Model5 from "../../assets/M5.png";
import Model6 from "../../assets/M6.jpg";
import Navbar from "../../components/Navbar";

function Service() {
  return (
    <>
    <Navbar />
      <Hero cName="hero-mid" heroImg={ServiceImg} title="Service" />
      <nav>
        <div className="model">
          <h1>Services we Provide</h1>
          <p>You can discover unique services for your agriculture field.</p>
          <div className="modelcard-service">
            <Link className="linker" to="/weatherforcasting"><ModelData
              cname="s-card"
              images="s-image"
              image={Model1}
              heading="Weather Forecasting"
              text="Integrate precise weather forecasting tools on your agriculture website for informed decision-making, optimizing planting, harvesting, and irrigation, while safeguarding crops and livestock"
            /></Link>
            <Link className="linker" to="/irrigationpractices"><ModelData
              cname="s-card"
              images="s-image"
              image={Model2}
              heading="Irrigation Practices"
              text="Efficient water management methods, like drip, sprinkler, and flood irrigation, to sustainably supply crops with water, optimizing agricultural production while conserving resources"
            /></Link>
            <Link className="linker" to="/pestcontrol"><ModelData
              cname="s-card"
              images="s-image"
              image={Model3}
              heading="Crop Disease Detection"
              text="Utilizing technology for precise and eco-friendly pest management, safeguarding crops and enhancing agricultural yields through automated systems and data-driven approaches"
            /></Link>
          </div>
          <div className="modelcard-service">
            <Link className="linker" to="/fertilisationdetection"><ModelData
              cname="s-card"
              images="s-image"
              image={Model4}
              heading="Fertilisation Detection"
              text="Employing advanced technology such as sensors and GPS to track the health, location, and behavior of animals on farms. This real-time data helps farmers optimize feeding, breeding, and disease management, ensuring the well-being and productivity"
            /></Link>
            <Link className="linker" to="/cropselection"><ModelData
              cname="s-card"
              images="s-image"
              image={Model5}
              heading="Crop Selection"
              text="Utilizing technology to identify and address nutrient deficiencies in crops or livestock, ensuring optimal health and growth for a more productive and sustainable agricultural systemm, it choose crops based on climate, soil, and local market demand"
            /></Link>
            <Link className="linker" to="/weedmonitoring"><ModelData
              cname="s-card"
              images="s-image"
              image={Model6}
              heading="पूछें"
              text="चैट बॉट (Chat Bot) एक कंप्यूटर प्रोग्राम है जो आपके साथ टेक्स्ट चैट के माध्यम से बातचीत कर सकता है। यह स्वतंत्रता से सवालों का उत्तर देता है और कार्यों को सम्पन्न कर सकता है, आमतौर पर ऑनलाइन सेवाओं के साथ उपयोग होता है, जैसे कि ग्राहक समर्थन या सूचना प्रदान करना।"
            /></Link>
          </div>
        </div>
      </nav>
      <Footer />
    </>
  );
}

export default Service;
