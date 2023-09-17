import React, { useState } from "react";
import Webcam from "react-webcam";
import "./IrrigationpracticesStyles.css"
function Irrigationpractices() {
  const videoConstraints = {
    facingMode: "user",
    width: 1200,
    height: 720,
  };

  const activatebar = [

      "Activated ........."," "," "," "," ",
      "No livestock Detected"," "," "," "," ",

  ]

  const deactivatebar = [
    "Activated ........."," "," "," "," ",
    "Livestock Detected"," "," "," "," ",
    
  ]
  const [videoActive, setVideoActive] = useState(false);

  const handleUserMedia = () => {
    setVideoActive(true);
  };

  const handleUserMediaError = () => {
    setVideoActive(false);
  };

  return (
    <div className="App-pest">
      <h1 className="cam-h1">Webcam Service</h1>
      <div style={{ position: "relative" }}>
        <Webcam
          audio={false}
          videoConstraints={videoConstraints}
          onUserMedia={handleUserMedia}
          onUserMediaError={handleUserMediaError}
        />
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 200,
            color: videoActive ? "green" : "red",
          }}
        >
          Status: {videoActive ? [activatebar]
           : [deactivatebar] }
        </div>
      </div>
    </div>
  );
}

export default Irrigationpractices;