import React from "react";
import "./Card.css";

const Card = ({ title, rating, info, imgSrc }) => {
  return (
    <div className="card">
      <img className="card-img" src={imgSrc} alt="" />
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="card-sub-title">{rating}</p>
        <p className="card-info">{info}</p>
      </div>
    </div>
  );
};

export default Card;
