import "./ModelStyles.css";
import TripData from "./ModelsData";
import Model1 from "../assets/w.jpeg";
import Model2 from "../assets/i.jpeg";
import Model3 from "../assets/p.jpeg";
/*import Model4 from "../assets/l.jpeg";
import Model5 from "../assets/n.jpeg";
import Model6 from "../assets/wm.jpeg"; */

function Trip() {
  return (
    <div classname="trip">
      <h1>Services we Provide</h1>
      <p>You can discover unique services for your agriculture field.</p>
      <div classname="tripcard">
        <TripData
          image={Model1}
          heading="Weather Forecasting"
          text="Make informed decisions about your farm’s day-to-day operations and plan ahead with accurate weather 
          forecasting. Our AI-powered technology provides real-time weather data and predictions for your specific location."
        />
        <TripData
          image={Model2}
          heading="Irrigation Practices"
          text="Save water and improve crop yield with our smart irrigation management system. Our technology monitors 
          soil moisture levels and automatically adjusts irrigation schedules to ensure your crops get the right amount of water at the right time."
        />
        <TripData
          image={Model3}
          heading="Automated Pest Control"
          text="Protect your crops from pests and reduce the use of harmful pesticides with our automated pest control 
          system. Our technology uses AI and machine learning to identify and control pests, minimizing the 
          risk of damage to your crops and the environment."
        />
      </div>
    </div>
  );
}
export default Trip;
