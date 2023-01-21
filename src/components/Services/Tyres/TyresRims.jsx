import React, { useEffect } from "react";

const TyresRims = () => {
  const title = <p id="titleId">Vroom's</p>;
  useEffect(() => {
    const titleId = document.getElementById("titleId");
    titleId.style.textDecoration = "5px underline #ffde59";
    titleId.style.display = "inline-block";
  }, []);
  return (
    <div>
      <div>
        <h1 className="intro-opening">
          We will help you with your Tyres and Rims
        </h1>
        <p className="intro-paragraph">
          If you're looking for a great deal on tyres and want good quality,
          backed up by excellent service you've come to the right place! Whether
          it's a tyre replacement or a full set of new car tyres, {title} tyre
          fitters will get you back on the road with a minimum of hassle.
        </p>
      </div>
      <div>
        <h1 className="intro-opening">How often should I check my wheels</h1>
        <p className="intro-paragraph">
          Tyres play an important role in your vehicle's road-handling
          performance. The monitoring of tyre pressure, tread depth and
          performing regular tyre rotations are all safety issues. Tyre pressure
          should be checked at least once a month. This is roughly the amount of
          time before you tyres lose inflation. That adds up very quickly and
          remember, temperature can have a major impact. A drop of 5°C can also
          cause a loss in inflation pressure. Monitoring tread depth will help
          ensure you're receiving the proper level of traction. Tyres should be
          rotated every 5-10,000 kilometres to achieve the maximum life. The
          front tyres, especially on front drive cars have to work harder than
          the rear tyres, providing steering, acceleration and the main braking
          traction. Pit Stop can help you improve the longevity and life of your
          car tyres.
        </p>
      </div>
    </div>
  );
};

export default TyresRims;
