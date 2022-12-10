import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Friday, December 9 2022, 20:26</h1>
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoFocus="on"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <ul>
        <li>Kyiv</li>
        <li>Heavy fog</li>
      </ul>
      <div className="row">
        <div className="col-6 forecast-day">
          <span className="temperature">2</span>
          <span className="unit">°C</span>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/fog.png"
            alt="Heavy fog"
            id="icon"
          />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 99%</li>
            <li>Pressure: 20 hPa</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
