import React from "react";
import logo from "../images/vroomlogo.png";
import SalePoster from "../images/vroomsale.png";
import SalePosterTwo from "../images/vroomflyer2.png";
import SalePosterFour from "../images/vroomrepairbody.png";
import DeliveryMan from "../images/delivery.png";
import Nav from "./Navigation/Nav";
import MainContent from "./Content/MainContent";
const Home = () => {
  return (
    <div>
      <div className="container" id="container-section">
        <div className="left-poster">
          <img className="sale-poster" src={SalePoster} alt="saleposter" />
          <img
            className="sale-poster two"
            src={SalePosterTwo}
            alt="needacar?"
          />
        </div>
        <div className="main-container">
          <div className="poster-home">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <Nav />
          <MainContent />
        </div>
        <div className="right-poster">
          <img
            className="sale-poster-three"
            src={DeliveryMan}
            alt="cardetailing"
          />

          <img
            className="sale-poster-four"
            src={SalePosterFour}
            alt="cardetailing"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
