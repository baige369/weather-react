import React from "react";
import "./CardBody.css";
import Forecast from "./Forecast";

export default function CardBody() {
  return (
    <div className="CardBody">
      <div className="row">
        <div className="col-7 city">
          <div className="Search">
            <form id="search-form">
              <input
                type="text"
                placeholder="Enter a city..."
                autoFocus
                autoComplete="off"
              />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
              <button>
                <i className="fas fa-map-marker-alt"></i>
              </button>
            </form>
          </div>

          <div className="Title">
            <div className="text-nowrap">
              <h1>Weather forecast for London</h1>
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
              <button type="button" className="btn btn-outline-secondary">
                °C
              </button>
              <button type="button" className="btn btn-outline-secondary">
                °F
              </button>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="ButtonDate">
            <div className="date">
              <button className="button-date">
                <span>Friday</span>
                <br />
                <span>17/09/2021</span>
                <br />
                <span>18:00</span>
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="Image">
              <div className="col image">
                <img
                  className="primary-image"
                  src={require("./images/01d.jpg")}
                  alt="sun-with-cloud"
                  width="60%"
                />
              </div>
            </div>
          </div>

          <div className="col">
            <div className="Description">
              <h2>21°C</h2>
              <h3>Partly cloudy</h3>
            </div>
          </div>

          <div className="col">
            <div className="OtherMeasures col other-measures">
              <ul>
                <li>
                  <strong>Humidity: </strong>
                  <span>63</span>%
                </li>
                <li>
                  <strong>Wind: </strong>
                  <span>4</span> mph
                </li>
                <li>
                  <strong>Feels like: </strong>
                  <span>21</span>°C
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <div className="Forecast">
          <Forecast />
        </div>
      </div>
    </div>
  );
}
