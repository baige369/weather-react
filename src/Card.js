import React from "react";
import "./Card.css";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

export default function Card() {
  return (
    <div className="Card">
      <div className="card border-dark mb-3">
        <CardHeader />
        <CardBody defaultCity="London" />
      </div>
    </div>
  );
}
