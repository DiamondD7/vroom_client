import React, { useState } from "react";

import "../../styles/servicesstyles.css";
import Batteries from "./Batteries/Batteries";
import Breaks from "./Breaks/Breaks";
import CarRentals from "./Car Rentals/CarRentals";
import CheckUps from "./Check Ups/CheckUps";
import EngineSwapService from "./Engine/EngineSwapService";
import ExhaustService from "./Exhaust/ExhaustService";
import MechOnDemand from "./MechanicOnDemand/MechOnDemand";
import ServicesOpening from "./Opening/ServicesOpening";
import RegoService from "./Rego/RegoService";
import ShockService from "./Shock/ShockService";
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
  const [exhaust, setExhaust] = useState(false);
  const [shock, setShock] = useState(false);
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
                setExhaust(false);
                setShock(false);
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
                setExhaust(false);
                setShock(false);
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
                setExhaust(false);
                setShock(false);
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
                setExhaust(false);
                setShock(false);
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
                setExhaust(false);
                setShock(false);
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
                setExhaust(false);
                setShock(false);
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
                setExhaust(false);
                setShock(false);
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
                setExhaust(false);
                setShock(false);
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
                setExhaust(false);
                setShock(false);
                setBreaks(true);
              }}
            >
              Vehicle Brakes
            </button>
          </li>
          <li>
            <button
              className={exhaust === true ? "line-active" : ""}
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
                setBreaks(false);
                setShock(false);
                setExhaust(true);
              }}
            >
              Car Exhaust Systems
            </button>
          </li>
          <li>
            <button
              className={shock === true ? "line-active" : ""}
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
                setBreaks(false);
                setExhaust(false);
                setShock(true);
              }}
            >
              Shock Absorbers
            </button>
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
          {exhaust && <ExhaustService />}
          {shock && <ShockService />}
        </div>
      </div>
    </div>
  );
};

export default MainServices;
