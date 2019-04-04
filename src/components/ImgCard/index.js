import React from "react";
import "./style.css";

function ImgCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="" src={props.image} />
      </div>
      <span onClick={() => props.removeImg(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default ImgCard;
