import React from "react";
import Group from "./Group.svg";

const Card = ({ title, category, days, body, image, bgc, onDelete }) => {
  return (
    <div className="card" onClick={onDelete}>
      <div className="card-image" style={{ background: `${bgc}` }}>
        <img src={image} alt="" />
      </div>
      <div className="card-details">
        <span className="one">{category}</span>
        <span className="two">{days}</span>
        <h3>{title}</h3>
        <p>{body}</p>

        <div className="circle"></div>
        <span className="author"> SalafiSignature</span>
        <span className="learn">Read more🡢</span>
      </div>
    </div>
  );
};

export default Card;
