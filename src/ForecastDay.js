import React from "react";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function nextDays() {
    return formatDay(props.data.dt) + " " + dateOrdinal(props.data.dt);
  }

  function dateOrdinal(timestamp) {
    let date = new Date(timestamp * 1000);
    let dayofMonth = date.getDate();
    if (dayofMonth === 31 || dayofMonth === 21 || dayofMonth === 1)
      return dayofMonth + "st";
    else if (dayofMonth === 22 || dayofMonth === 2) return dayofMonth + "nd";
    else if (dayofMonth === 23 || dayofMonth === 3) return dayofMonth + "rd";
    else return dayofMonth + "th";
  }

  return (
    <div className="ForecastDay">
      <div className="Forecast-date">{nextDays()}</div>
      <img
        className="secondary-image"
        src={require(`./images/${props.data.weather[0].icon}.jpg`)}
        alt={props.data.description}
      />
      <div className="Forecast-temperature">
        <span className="Forecast-temperature-max">{maxTemperature()}</span>|
        <span className="Forecast-temperature-min">{minTemperature()}</span>
      </div>
      <div className="Forecast-description text-capitalize">
        {props.data.weather[0].description}
      </div>
    </div>
  );
}
