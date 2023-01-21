import React from "react";

const Batteries = () => {
  return (
    <div>
      <div>
        <h1 className="intro-opening">
          Everyone needs a battery, when your battery is dying make sure to get
          us to help you to revive it or better exchange it!
        </h1>
        <p className="intro-paragraph">
          Your car battery is essential to making sure your vehicle starts every
          day. It ensures the lights light up, the wipers wipe, and the music
          plays! Your battery is charging whenever your car is running but it
          only has so much life and will eventually need replacing. Do not get
          caught out - batteries always die at the most inconvenient of times!
          Let Pit Stop check your battery to ensure it will not let you down-
          regular servicing of your car by Pit Stop will help prevent you being
          caught out by a failed battery. Pit Stop have the right battery to
          suit your car. Quick guide to car battery types
        </p>
      </div>

      <div>
        <h2 className="intro-opening servicessubheader">Calcium Battery</h2>
        <p className="intro-paragraph">
          Calcium batteries are the most common battery fitted to vehicles. In
          these batteries, a small amount of calcium is added to the lead plates
          to increase durability. Benefits of a calcium battery are;
        </p>
        <ul className="intro-paragraph">
          <li>High cold cranking amps</li>
          <li>Increase shelf and service life</li>
          <li>Maintenance free</li>
        </ul>
      </div>
    </div>
  );
};

export default Batteries;
