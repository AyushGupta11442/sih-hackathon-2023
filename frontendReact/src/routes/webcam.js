import React, { useState } from "react";
import Webcam from "react-webcam";
import Navbar from "../components/Navbar";

function Service() {
  const videoConstraints = {
    facingMode: "user",
    width: 1200,
    height: 720,
  };

  const [videoActive, setVideoActive] = useState(false);

  const handleUserMedia = () => {
    setVideoActive(true);
  };

  const handleUserMediaError = () => {
    setVideoActive(false);
  };

  return (
    <div className="App">
      <Navbar />
      <h1>Webcam Service</h1>
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
          Status: {videoActive ? "Activate" : "Deactivate"}
        </div>
      </div>
    </div>
  );
}

export default Service;
