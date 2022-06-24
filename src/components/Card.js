import React from "react";

const Card = ({ title, category, days, body, image, bgc, onDelete }) => {
  return (
    <div className="card" onClick={onDelete}>
      <div className="card-image" style={{ background: `${bgc}` }}>
        <img src={image} alt="" />
      </div>
      <div className="card-details">
        <div className="header">
          <span className="one">{category}</span>
          <span className="two">{days}</span>
        </div>
        <div className="content">
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
        <div className="footer">
          <div className="circle">
            <img src={image} alt="" />
          </div>
          <span className="author"> SalafiSignature</span>
          <span className="learn">Read more🡢</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
