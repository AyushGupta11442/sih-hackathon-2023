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
              text="Fertilizer prediction leverages soil testing and data analysis to recommend specific fertilizer types and quantities for optimal crop growth, maximizing yield and sustainability in agriculture on your website"
            /></Link>
            <Link className="linker" to="/cropselection"><ModelData
              cname="s-card"
              images="s-image"
              image={Model5}
              heading="Crop Selection"
              text="Crop selection involves analyzing factors like soil type, climate, and market demand to help farmers choose the most suitable crops for cultivation, optimizing yield and profit in agriculture, considers soil, climate, market demand, and profitability for agriculture"
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
