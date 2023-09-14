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
import { useState } from "react";
import Navbar from "../../components/Navbar";


function Service() {
  const [status, setstatus] = useState(true);
  return (
    <>
    <Navbar />
      <Hero cName="hero-mid" heroImg={ServiceImg} title="Service" />
      <nav>
        <div className="model">
          <h1>Services we Provide</h1>
          <p>You can discover unique services for your agriculture field.</p>
          <div className="modelcard-service">
            <Link to="/weatherforcasting"><ModelData
              cname="s-card"
              images="s-image"
              image={Model1}
              heading="Weather Forecasting"
              text="Make informed decisions about your farm’s day-to-day operations and plan ahead with accurate weather 
            forecasting. Our AI-powered technology provides real-time weather data and predictions for your specific location."
            /></Link>
            <Link to="/irrigationpractices"><ModelData
              cname="s-card"
              images="s-image"
              image={Model2}
              heading="Irrigation Practices"
              text="Save water and improve crop yield with our smart irrigation management system. Our technology monitors 
            soil moisture levels and automatically adjusts irrigation schedules to ensure your crops get the right amount of water at the right time."
            /></Link>
            <Link to="/pestcontrol"><ModelData
              cname="s-card"
              images="s-image"
              image={Model3}
              heading="Automated Pest Control"
              text="Protect your crops from pests and reduce the use of harmful pesticides with our automated pest control 
            system. Our technology uses AI and machine learning to identify and control pests, minimizing the 
            risk of damage to your crops and the environment."
            /></Link>
          </div>
          <div className="modelcard">
            <Link to="/livestockmonitoring"><ModelData
              cname="s-card"
              images="s-image"
              image={Model4}
              heading="Livestock Monitoring"
              text="Keep track of your livestock’s health and well-being with our livestock monitoring system. 
              Our technology uses sensors to monitor the animals’ movement, activity, and vital signs, providing 
              real-time data to help you identify and address any issues."
            /></Link>
            <Link to="/nutritiondetection"><ModelData
              cname="s-card"
              images="s-image"
              image={Model5}
              heading="Nutrition Deficiency Detection"
              text="Detect and correct any nutrient deficiencies in your crops with our nutrition deficiency detection 
              system. Our technology analyzes plant tissue samples to identify any nutrient deficiencies and recommends 
              the appropriate fertilizers or soil amendments to help your crops thrive."
            /></Link>
            <Link to="/weedmonitoring"><ModelData
              cname="s-card"
              images="s-image"
              image={Model6}
              heading="Weed Monitoring"
              text="Protect your crops from pests and reduce the use of harmful pesticides with our automated pest control 
            system. Our technology uses AI and machine learning to identify and control pests, minimizing the 
            risk of damage to your crops and the environment."
            /></Link>
          </div>
        </div>
      </nav>
      <Footer />
    </>
  );
}

export default Service;
