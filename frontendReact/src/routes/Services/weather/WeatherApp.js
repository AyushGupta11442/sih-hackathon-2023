import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./WeatherApp.css";

function WeatherApp() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
    </React.Fragment>
  );
}

export default WeatherApp;
