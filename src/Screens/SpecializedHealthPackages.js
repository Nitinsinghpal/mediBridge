import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import './SpecializedHealthPackages.css'

function SpecializedHealthPackages() {
  const [swastBihar, setSwastBihar] = useState(true);
  const [fullBody, setfullBody] = useState(false);
  const [mediBridge, setmediBridge] = useState(false);
  const [specialHealth, setSpecialHealth] = useState(false);

  let swastBiharCard = {
    name: "swasth Bihar Packages",
    description:
      "Health care refers to the efforts that medical professionals make to restore our physical and mental well-being. The term also includes the provision of services to maintain emotional well-being. We call people and organizations that provide these services 'health-care providers.",
    mrp: 2500,
    discountedPrice: 1500,
  };
  let fullBodyCard = {
    name: "Full Body Special Package",
    description:
      "Health care refers to the efforts that medical professionals make to restore our physical and mental well-being. The term also includes the provision of services to maintain emotional well-being. We call people and organizations that provide these services 'health-care providers.",
    mrp: 3000,
    discountedPrice: 2200,
  };
  let mediBridgeCard = {
    name: "Medi Bridge Special Packages",
    description:
      "Health care refers to the efforts that medical professionals make to restore our physical and mental well-being. The term also includes the provision of services to maintain emotional well-being. We call people and organizations that provide these services 'health-care providers.",
    mrp: 3500,
    discountedPrice: 2500,
  };
  let specialHealthCard = {
    name: "Special Health Packages",
    description:
      "Health care refers to the efforts that medical professionals make to restore our physical and mental well-being. The term also includes the provision of services to maintain emotional well-being. We call people and organizations that provide these services 'health-care providers.",
    mrp: 3200,
    discountedPrice: 2700,
  };

  function handleChange(e) {
    if (e.target.name === "swastBihar") {
      setSwastBihar(true);
      setSpecialHealth(false);
      setfullBody(false);
      setmediBridge(false);
    } else if (e.target.name === "fullBody") {
      setSwastBihar(false);
      setSpecialHealth(false);
      setfullBody(true);
      setmediBridge(false);
    } else if (e.target.name === "mediBridge") {
      setSwastBihar(false);
      setSpecialHealth(false);
      setfullBody(false);
      setmediBridge(true);
    } else if (e.target.name === "specialHealth") {
      setSwastBihar(false);
      setSpecialHealth(true);
      setfullBody(false);
      setmediBridge(false);
    }
  }
  return (
    <div className="container col-12">
        <h3 className="SHPHeding">Specialized<br/> Health Packages</h3>
      <div className="row">
        <div className="ulOptions col-6">
          <button
            className=""
            name="swastBihar"
            onClick={handleChange}
          >
            swasth Bihar Packages
          </button>
          <button
            className=""
            name="fullBody"
            onClick={handleChange}
          >
            Full Body Special Package
          </button>
          <button
            className=""
            name="mediBridge"
            onClick={handleChange}
          >
            Medi Bridge Special Packages
          </button>
          <button
            className=""
            name="specialHealth"
            onClick={handleChange}
          >
            Special Health Packages
          </button>
        </div>
        <div className="liOptions col-6">
        {swastBihar && <Card data={swastBiharCard} />}
        {fullBody && <Card data={fullBodyCard} />}
        {mediBridge && <Card data={mediBridgeCard} />}
        {specialHealth && <Card data={specialHealthCard} />}
        </div>
      </div>
    </div>
  );
}

export default SpecializedHealthPackages;
