import "./ModelStyles.css";

function ModelData(props) {
  return (
    <div className={props.cname}>
      <div className={props.images}>
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}
 export default ModelData;