import React, { useState } from "react";
import axios from "axios";
import "./CardBody.css";
import FormattedDate from "./FormattedDate";
import Forecast from "./Forecast";

export default function CardBody(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });
  const [unit, setUnit] = useState("celsius");

  function showWeather(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      tempCelsius: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelCelsius: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "a2dda52dce059eb8a14e95aaa0db6ab7";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function changeTempToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function changeTempToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  let temperature = Math.round(weather.tempCelsius) + "°C";
  let feel = Math.round(weather.feelCelsius) + "°C";

  if (unit === "celsius") {
    temperature = Math.round(weather.tempCelsius) + "°C";
    feel = Math.round(weather.feelCelsius) + "°C";
  } else {
    temperature = Math.round((weather.tempCelsius * 9) / 5 + 32) + "°F";
    feel = Math.round((weather.feelCelsius * 9) / 5 + 32) + "°F";
  }

  if (weather.ready) {
    return (
      <div className="CardBody">
        <div className="row">
          <div className="col-7 city">
            <div className="Search">
              <form id="search-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter a city..."
                  autoFocus
                  autoComplete="off"
                  onChange={updateCity}
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
            <div className="Title">
              <div className="text-nowrap">
                <h1>Weather forecast for {weather.city}</h1>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="TempButtons">
              <div
                className="btn-group temp-buttons"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={changeTempToCelsius}
                >
                  °C
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={changeTempToFahrenheit}
                >
                  °F
                </button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <FormattedDate date={weather.date} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="Image">
              <div className="col image">
                <img
                  className="primary-image"
                  src={require(`./images/${weather.icon}.jpg`)}
                  alt={weather.description}
                  width="60%"
                />
              </div>
            </div>
          </div>

          <div className="col">
            <div className="Description">
              <h2>{temperature}</h2>
              <h3 className="text-capitalize">{weather.description}</h3>
            </div>
          </div>

          <div className="col">
            <div className="OtherMeasures col other-measures">
              <ul>
                <li>
                  <strong>Humidity: </strong>
                  <span>{Math.round(weather.humidity)}</span>%
                </li>
                <li>
                  <strong>Wind: </strong>
                  <span>{Math.round(weather.wind)}</span> km/h
                </li>
                <li>
                  <strong>Feels like: </strong>
                  <span>{feel}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="Forecast">
          <Forecast coordinates={weather.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
