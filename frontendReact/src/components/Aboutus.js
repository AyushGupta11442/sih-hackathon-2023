import "./AboutusStyles.css";
import Info1 from "../assets/ab1.jpeg"
import Info2 from "../assets/ab2.jpeg"
import Info3 from "../assets/ab3.jpeg"
import Info4 from "../assets/ab4.jpeg"

function AboutUs() {
  return (
    <div className="destination">
      <h1>Our Mission</h1>
      <p>
        Cultivating Agriculture with Cutting-Edge Tech
      </p>
      <div className="first-des">
        <div className="des-text">
          <p> AgroTec is a collaborative endeavor aimed to revolutionize the
            agricultural sector by harnessing cutting-edge technologies and creative
            minds. We are committed to empowering farmers, promoting sustainable practices,
            and increasing agricultural productivity to ensure food security and
            prosperity for communities in India and beyond.</p>
        </div>
        <div className="image">
          <img alt="img" src={Info1}></img>
          <img alt="img" src={Info2}></img>
        </div>
      </div>
      <div className="first-des-reverse">
        <div className="des-text">
          <p> AgroTec is a collaborative endeavor aimed to revolutionize the
            agricultural sector by harnessing cutting-edge technologies and creative
            minds. We are committed to empowering farmers, promoting sustainable practices,
            and increasing agricultural productivity to ensure food security and
            prosperity for communities in India and beyond.</p>
        </div>
        <div className="image">
          <img alt="img" src={Info3}></img>
          <img alt="img" src={Info4}></img>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
