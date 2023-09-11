import "./ModelStyles.css";

function TripData(props) {
  return (
    <div classname="t-card">
      <div classname="t-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}
 export default TripData