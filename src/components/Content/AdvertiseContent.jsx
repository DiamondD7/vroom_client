import React from "react";
import Flyer from "../../images/vroomflyer4.png";
import Flyer2 from "../../images/vroomflyer5.png";
import Flyer3 from "../../images/vroomflyer6.png";

const AdvertiseContent = () => {
  return (
    <div>
      <div className="car-posters-container">
        <img className="tyres-poster" src={Flyer} alt="tyresposter" />
        <img className="tyres-poster-two" src={Flyer2} alt="tyresposter" />
      </div>
      <div className="car-posters-container">
        <img className="insurance-flyer" src={Flyer3} alt="insurance" />
        <div className="seek-professional-statement">
          <h1 className="statement-title">Seek our professional advice now!</h1>
          <p className="statement-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est
            similique voluptates non illo. Enim eos, cupiditate delectus soluta
            quod quibusdam quia. Quibusdam illo itaque laborum ipsa, repellat
            voluptas impedit.
          </p>
          <button className="btn-quota">Request a quote</button>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseContent;
