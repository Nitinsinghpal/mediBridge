import React from "react";
import micro from "../Images/Doctor With MicroScope.jpg"
import './Crousels.css'
function Crousels() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide mt-5 mx-5"
      data-bs-ride="false"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div className="col-3">
            <img
              src={micro}
              class="polygon"
              alt="..."
            />
          </div>
          <div class="carousel-caption d-none d-md-block col-9">
            <h5 className="textColor">First slide label</h5>
            <p className="textColor">Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
        <div className="col-3">
            <img
              src={micro}
              class="polygon"
              alt="..."
            />
          </div>
          <div class="carousel-caption d-none d-md-block col-9">
            <h5 className="textColor">Second slide label</h5>
            <p className="textColor">Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
        <div className="col-3">
            <img
              src={micro}
              class="polygon"
              alt="..."
            />
          </div>
          <div class="carousel-caption d-none d-md-block col-9">
            <h5 className="textColor">Third slide label</h5>
            <p className="textColor">Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Crousels;
