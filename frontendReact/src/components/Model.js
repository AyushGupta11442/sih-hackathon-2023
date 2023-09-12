import "./ModelStyles.css";
import ModelData from "./ModelData";
import Model1 from "../assets/M1.jpg";
import Model2 from "../assets/M2.jpg";
import Model3 from "../assets/M3.jpg";
import Model4 from "../assets/M4.jpg";
import Model5 from "../assets/M5.png";
import Model6 from "../assets/M6.jpg";

function Model() {
  return (
    <div className="model">
      <h1>Services we Provide</h1>
      <p>You can discover unique services for your agriculture field.</p>
      <div className="modelcard">
        <ModelData
          image={Model1}
          heading="Weather Forecasting"
          text="Make informed decisions about your farm’s day-to-day operations and plan ahead with accurate weather 
          forecasting. Our AI-powered technology provides real-time weather data and predictions for your specific location."
        />
        <ModelData
          image={Model2}
          heading="Irrigation Practices"
          text="Save water and improve crop yield with our smart irrigation management system. Our technology monitors 
          soil moisture levels and automatically adjusts irrigation schedules to ensure your crops get the right amount of water at the right time."
        />
        <ModelData
          image={Model3}
          heading="Automated Pest Control"
          text="Protect your crops from pests and reduce the use of harmful pesticides with our automated pest control 
          system. Our technology uses AI and machine learning to identify and control pests, minimizing the 
          risk of damage to your crops and the environment."
        />
      </div>
      <div className="modelcard">
        <ModelData
          image={Model4}
          heading="Livestock Monitoring"
          text="Keep track of your livestock’s health and well-being with our livestock monitoring system. 
            Our technology uses sensors to monitor the animals’ movement, activity, and vital signs, providing 
            real-time data to help you identify and address any issues."
        />
        <ModelData
          image={Model5}
          heading="Nutrition Deficiency Detection"
          text="Detect and correct any nutrient deficiencies in your crops with our nutrition deficiency detection 
            system. Our technology analyzes plant tissue samples to identify any nutrient deficiencies and recommends 
            the appropriate fertilizers or soil amendments to help your crops thrive."
        />
        <ModelData
          image={Model6}
          heading="Weed Monitoring"
          text="Protect your crops from pests and reduce the use of harmful pesticides with our automated pest control 
          system. Our technology uses AI and machine learning to identify and control pests, minimizing the 
          risk of damage to your crops and the environment."
        />
      </div>
    </div>
  );
}
export default Model;
