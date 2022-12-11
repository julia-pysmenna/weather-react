import React from "react";

import FormattedDate from "./FormattedDate";

export default function WeatherSearch(props) {
  return (
    <div className="WeatherSearch">
      <h1>
        <FormattedDate date={props.data.date} />
      </h1>
      <ul>
        <li>{props.data.city}</li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 forecast-day">
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
          <img src={props.data.icon} alt={props.data.description} id="icon" />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Pressure: {props.data.pressure} hPa</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
