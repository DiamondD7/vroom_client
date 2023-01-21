import React from "react";

const RegoService = () => {
  return (
    <div>
      <h1 className="intro-opening">Get your vehicle registered with us!</h1>
      <p className="intro-paragraph">
        Our team is happy to announce to you our dear customer that we will be
        having deals every month and we will pick the lucky customer to win a
        hamper and a huge discount from us!
      </p>

      <div>
        <h2 className="intro-opening">
          Registering with us, just became faster and easier
        </h2>
        <p className="intro-paragraph">
          Just come to any of our branch and bring out any kind of legal
          identification and information about the car you are registering. We
          got the rest!
        </p>
      </div>

      <div className="store-location">
        <div>
          <p className="location-paragraph">Vroom Botany</p>
          <p className="address-paragraph">123 Botany Road, Auckland 2222</p>
        </div>

        <div>
          <p className="location-paragraph">Vroom Pakuranga</p>
          <p className="address-paragraph">
            2/23 Pakuranga Road, Auckland 2113
          </p>
        </div>

        <div>
          <p className="location-paragraph">Vroom Albany</p>
          <p className="address-paragraph">53A Jaylen Drive, Auckland 2000</p>
        </div>
      </div>
    </div>
  );
};

export default RegoService;
