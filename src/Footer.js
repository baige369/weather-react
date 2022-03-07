import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/ewelinabaig/"
          target="_blank"
          rel="noreferrer"
        >
          Ewelina Baig
        </a>{" "}
        and is
        <a
          href="https://github.com/baige369/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>{" "}
        and
        <a
          href="https://loving-torvalds-5d25fb.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
