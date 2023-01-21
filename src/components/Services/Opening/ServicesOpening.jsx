import React, { useEffect } from "react";

const ServicesOpening = () => {
  const prof = <p id="prof">professionals</p>;
  useEffect(() => {
    const profText = document.getElementById("prof");
    profText.style.color = "#ffde59";
    profText.style.display = "inline";
    profText.style.backgroundColor = "black";
    profText.style.padding = "0 15px";
  }, []);
  return (
    <div>
      <h1 className="intro-opening">
        Are you looking for {prof} who will take care of your car?
      </h1>
      <p className="intro-opening-statement">
        Here in Vroom we will make sure to make your car look and smells brand
        new. And if it is already new, then we will make it newer! And of course
        we can handle anything comes our way becuase all our professionals are
        better than anyone. THATS OUR PROMISE!
      </p>

      <br />
      <p className="intro-opening-statement explore">
        Explore our various services
      </p>
    </div>
  );
};

export default ServicesOpening;
