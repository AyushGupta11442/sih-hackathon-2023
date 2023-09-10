import Models from "./Models";
import "./ModelStyles.css";

function ModelsData(props) {
  return (
    <div classname="m-card">
      <div classname="m-img">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}
