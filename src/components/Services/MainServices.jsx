import React, { useState } from "react";

import "../../styles/servicesstyles.css";
import Batteries from "./Batteries/Batteries";
import Breaks from "./Breaks/Breaks";
import CarRentals from "./Car Rentals/CarRentals";
import CheckUps from "./Check Ups/CheckUps";
import EngineSwapService from "./Engine/EngineSwapService";
import MechOnDemand from "./MechanicOnDemand/MechOnDemand";
import ServicesOpening from "./Opening/ServicesOpening";
import RegoService from "./Rego/RegoService";
import TyresRims from "./Tyres/TyresRims";
import WofServices from "./WOF/WofService";
const MainServices = () => {
  const [opening, setOpening] = useState(true);
  const [wof, setWof] = useState(false);
  const [rego, setRego] = useState(false);
  const [engineSwap, setEngineSwap] = useState(false);
  const [tyresRims, setTyresRims] = useState(false);
  const [mechDemand, setMechDemand] = useState(false);
  const [carRentals, setCarRentals] = useState(false);
  const [checkUps, setCheckUps] = useState(false);
  const [battery, setBattery] = useState(false);
  const [breaks, setBreaks] = useState(false);
  return (
    <div>
      <div className="services-container">
        <ul className="ul-container">
          <li>Services</li>
          <li>
            <button
              className={wof === true ? "line-active" : ""}
              onClick={() => {
                setOpening(false);
                setRego(false);
                setEngineSwap(false);
                setTyresRims(false);
                setMechDemand(false);
                setCarRentals(false);
                setCheckUps(false);
                setBattery(false);
                setBreaks(false);
                setWof(true);
              }}
            >
              W.O.F
            </button>
          </li>
          <li>
            <button
              className={rego === true ? "line-active" : ""}
              onClick={() => {
                setOpening(false);
                setWof(false);
                setEngineSwap(false);
                setTyresRims(false);
                setMechDemand(false);
                setCarRentals(false);
                setCheckUps(false);
                setBattery(false);
                setBreaks(false);
                setRego(true);
              }}
            >
              Rego
            </button>
          </li>
          <li>
            <button
              className={engineSwap === true ? "line-active" : ""}
              onClick={() => {
                setOpening(false);
                setWof(false);
                setRego(false);
                setTyresRims(false);
                setMechDemand(false);
                setCarRentals(false);
                setCheckUps(false);
                setBattery(false);
                setBreaks(false);
                setEngineSwap(true);
              }}
            >
              Engine Swap
            </button>
          </li>
          <li>
            <button
              className={tyresRims === true ? "line-active" : ""}
              onClick={() => {
                setOpening(false);
                setWof(false);
                setRego(false);
                setEngineSwap(false);
                setMechDemand(false);
                setCarRentals(false);
                setCheckUps(false);
                setBattery(false);
                setBreaks(false);
                setTyresRims(true);
              }}
            >
              Tyres/Rims Repair
            </button>
          </li>
          <li>
            <button
              className={mechDemand === true ? "line-active" : ""}
              onClick={() => {
                setOpening(false);
                setWof(false);
                setRego(false);
                setEngineSwap(false);
                setTyresRims(false);
                setCarRentals(false);
                setCheckUps(false);
                setBattery(false);
                setBreaks(false);
                setMechDemand(true);
              }}
            >
              Mechanic On-Demand
            </button>
          </li>
          <li>
            <button
              className={carRentals === true ? "line-active" : ""}
              onClick={() => {
                setOpening(false);
                setWof(false);
                setRego(false);
                setEngineSwap(false);
                setTyresRims(false);
                setMechDemand(false);
                setCheckUps(false);
                setBattery(false);
                setBreaks(false);
                setCarRentals(true);
              }}
            >
              Car Rentals
            </button>
          </li>
          <li>
            <button
              className={checkUps === true ? "line-active" : ""}
              onClick={() => {
                setOpening(false);
                setWof(false);
                setRego(false);
                setEngineSwap(false);
                setTyresRims(false);
                setMechDemand(false);
                setCarRentals(false);
                setBattery(false);
                setBreaks(false);
                setCheckUps(true);
              }}
            >
              General Car Check ups
            </button>
          </li>
          <li>
            <button
              className={battery === true ? "line-active" : ""}
              onClick={() => {
                setOpening(false);
                setWof(false);
                setRego(false);
                setEngineSwap(false);
                setTyresRims(false);
                setMechDemand(false);
                setCarRentals(false);
                setCheckUps(false);
                setBreaks(false);
                setBattery(true);
              }}
            >
              Batteries
            </button>
          </li>
          <li>
            <button
              className={breaks === true ? "line-active" : ""}
              onClick={() => {
                setOpening(false);
                setWof(false);
                setRego(false);
                setEngineSwap(false);
                setTyresRims(false);
                setMechDemand(false);
                setCarRentals(false);
                setCheckUps(false);
                setBattery(false);
                setBreaks(true);
              }}
            >
              Vehicle Brakes
            </button>
          </li>
          <li>
            <button>Car Exhaust Systems</button>
          </li>
          <li>
            <button>Shock Absorbers</button>
          </li>
          <li>
            <button>Towbars</button>
          </li>
        </ul>
        <div className="information-div">
          {wof && <WofServices />}
          {rego && <RegoService />}
          {opening && <ServicesOpening />}
          {engineSwap && <EngineSwapService />}
          {tyresRims && <TyresRims />}
          {mechDemand && <MechOnDemand />}
          {carRentals && <CarRentals />}
          {checkUps && <CheckUps />}
          {battery && <Batteries />}
          {breaks && <Breaks />}
        </div>
      </div>
    </div>
  );
};

export default MainServices;
