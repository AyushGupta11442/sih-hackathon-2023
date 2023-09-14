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
              heading="Automated Pest Control"
              text="Utilizing technology for precise and eco-friendly pest management, safeguarding crops and enhancing agricultural yields through automated systems and data-driven approaches"
            /></Link>
          </div>
          <div className="modelcard-service">
            <Link className="linker" to="/livestockmonitoring"><ModelData
              cname="s-card"
              images="s-image"
              image={Model4}
              heading="Livestock Monitoring"
              text="Employing advanced technology such as sensors and GPS to track the health, location, and behavior of animals on farms. This real-time data helps farmers optimize feeding, breeding, and disease management, ensuring the well-being and productivity"
            /></Link>
            <Link className="linker" to="/nutritiondetection"><ModelData
              cname="s-card"
              images="s-image"
              image={Model5}
              heading="Nutrition Deficiency Detection"
              text="Utilizing technology to identify and address nutrient deficiencies in crops or livestock, ensuring optimal health and growth for a more productive and sustainable agricultural system"
            /></Link>
            <Link className="linker" to="/weedmonitoring"><ModelData
              cname="s-card"
              images="s-image"
              image={Model6}
              heading="Weed Monitoring"
              text="Protect your crops from pests and reduce the use of harmful pesticides with our automated pest control 
            system. Our technology uses AI and machine learning to identify and control pests, minimizing the 
            risk of damage to your crops"
            /></Link>
          </div>
        </div>
      </nav>
      <Footer />
    </>
  );
}

export default Service;
