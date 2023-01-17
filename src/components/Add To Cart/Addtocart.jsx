import React, { useState } from "react";

import "../../styles/addtocartstyles.css";
import ItemsInCart from "./ItemsInCart";
const Addtocart = (props) => {
  const [total, setTotal] = useState(0);
  const btnClose = (e) => {
    e.preventDefault();
    props.isClose(false);
  };

  const getItemDetails = (price, count) => {
    console.log("pricetotal and count", price, count);
    // let total = price * count;
    setTotal((prevTotal) => prevTotal + price);
  };

  console.log("total", total);

  return (
    <div>
      <div className="overlay"></div>
      <div className="popup-container">
        {props.picked.map((items) => (
          <div className="addtocart-subcontainer" key={items.Id}>
            <ItemsInCart it={items} detailsFunc={getItemDetails} />
          </div>
        ))}
        <p>Total: {total}</p>
      </div>
      <button className="addtocart-close-button" onClick={btnClose}>
        close
      </button>
    </div>
  );
};
export default Addtocart;
