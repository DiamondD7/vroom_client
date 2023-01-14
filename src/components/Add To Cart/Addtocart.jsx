import React from "react";

import "../../styles/addtocartstyles.css";
const Addtocart = (props) => {
  return (
    <div>
      <div className="popup-container">
        {props.picked.map((items) => (
          <div key={items.id}>
            <p>title: {items.ProductName}</p>
            <p>${items.ProductPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Addtocart;
