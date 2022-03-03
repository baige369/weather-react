import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  function twoDigits(n) {
    if (n < 10) return "0" + n;
    return n;
  }

  let date = twoDigits(props.date.getDate());
  let month = twoDigits(props.date.getMonth() + 1);
  let year = props.date.getFullYear();
  let fullDate = date + "/" + month + "/" + year;

  let hour = twoDigits(props.date.getHours());
  let minutes = twoDigits(props.date.getMinutes());
  let time = hour + ":" + minutes;

  return (
    <div className="ButtonDate">
      <div className="date">
        <button className="button-date">
          <span>{day}</span>
          <br />
          <span>{fullDate}</span>
          <br />
          <span>{time}</span>
        </button>
      </div>
    </div>
  );
}
