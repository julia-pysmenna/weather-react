import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thu</div>
          <div className="forecastTemperature">
            <span className="temp-max">20°</span>
            <span className="temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
