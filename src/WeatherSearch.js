import React from "react";

import FormattedDate from "./FormattedDate";

import WeatherTemperature from "./WeatherTemperature";

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
          <WeatherTemperature celsius={props.data.temperature} />
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
