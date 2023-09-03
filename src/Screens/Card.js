import React from "react";
import Liv from "../Images/liver.png";
import "./Card.css";

function Card(props) {
  let data = props.data;
  return (
    <div className="container col-6">
        <div class="fT">
          <div class="col-2">
            <img src={Liv} class="" alt="swastBiharCard" className="cradImg" />
          </div>
          <div class="col-4 htext">
            <h5 class="">{data.name}</h5>
            <p class="">{data.description}</p>
              <div>
                <span>{data.mrp}</span>
                <br />
                <span>{data.discountedPrice}</span>
              </div>
          </div>
        </div>
      </div>
  );
}

export default Card;
