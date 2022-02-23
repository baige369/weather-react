import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col next-days">
          <div className="date">Sat 18th</div>
          <img
            className="secondary-image"
            src={require("./images/01d.jpg")}
            alt="sunny"
          />
          <div className="temperature">21°C|14°C</div>
          <div className="description">Sunny</div>
        </div>
        <div className="col next-days">
          <div className="date">Sun 19th</div>
          <img
            className="secondary-image"
            src={require("./images/partly-cloudy.jpg")}
            alt="partly-cloudy"
          />
          <div className="temperature">21°C|14°C</div>
          <div className="description">Partly cloudy</div>
        </div>
        <div className="col next-days">
          <div className="date">Mon 20th</div>
          <img
            className="secondary-image"
            src={require("./images/light-rain.jpg")}
            alt="light-rain"
          />
          <div className="temperature">21°C|14°C</div>
          <div className="description">Light rain</div>
        </div>
        <div className="col next-days">
          <div className="date">Tue 21th</div>
          <img
            className="secondary-image"
            src={require("./images/sunny.jpg")}
            alt="sunny"
          />
          <div className="temperature">21°C|14°C</div>
          <div className="description">Sunny</div>
        </div>
        <div className="col next-days">
          <div className="date">Wed 22th</div>
          <img
            className="secondary-image"
            src={require("./images/sunny.jpg")}
            alt="sunny"
          />
          <div className="temperature">21°C|14°C</div>
          <div className="description">Sunny</div>
        </div>
      </div>
    </div>
  );
}
