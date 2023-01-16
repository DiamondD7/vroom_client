import React, { useState } from "react";

import "../../styles/addtocartstyles.css";
const Addtocart = (props) => {
  const [isModalNotClose, setIsModalNotClose] = useState(true);
  const [counter, setCounter] = useState(0);
  const btnClose = (e) => {
    e.preventDefault();
    setIsModalNotClose(false);
    props.isClose(false);
  };

  const btnadd = () => {
    setCounter((prevCounter) => prevCounter + 1);
    // setCounter(props.picked.Quantity + 1);
  };

  const btnminus = () => {
    if (props.picked.Quantity > 0) {
      setCounter((prevCounter) => prevCounter - 1);
      // setCounter(props.picked.Quantity - 1);
    }
  };
  return (
    <div>
      <div className="overlay"></div>
      <div className="popup-container">
        {props.picked.map((items) => (
          <div className="addtocart-subcontainer" key={items.id}>
            <div className="container-flex">
              <img
                className="addtocart-img"
                src={items.ProductImage}
                alt="addtocartimage"
              />
              <div className="container-flex horizontalCenter">
                <button onClick={btnminus}>-</button>
                <p>{counter}</p>
                <button onClick={btnadd}>+</button>
              </div>
            </div>
            <p>{items.ProductName}</p>
            <p>${items.ProductPrice}</p>
          </div>
        ))}
      </div>
      <button className="addtocart-close-button" onClick={btnClose}>
        close
      </button>
    </div>
  );
};
export default Addtocart;
