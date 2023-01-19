import React, { useState, useEffect } from "react";

import "../../styles/addtocartstyles.css";

const ItemsInCart = (props) => {
  const [counter, setCounter] = useState(1);
  const [isMinus, setIsMinus] = useState(false);

  const btnadd = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setIsMinus(false);
  };

  const btnminus = () => {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
      setIsMinus(true);
    }
  };

  const btnremove = () => {
    console.log(counter);
    let productPrice = parseInt(props.it.ProductPrice);
    props.detailsFuncRemove(props.it.ProductName, productPrice, counter);
  };

  useEffect(() => {
    let productPrice = parseInt(props.it.ProductPrice);
    if (isMinus === false) {
      props.detailsFunc(productPrice, counter);
    } else {
      props.detailsFuncMinus(productPrice, counter);
    }
  }, [counter]);

  return (
    <>
      <div>
        <div className="container-flex">
          <img
            className="addtocart-img"
            src={props.it.ProductImage}
            alt="addtocartimage"
          />
          <div className="container-flex horizontalCenter">
            <button className="btnminus" onClick={btnminus}>
              -
            </button>
            <p className="counter-p">{counter}</p>
            <button className="btnadd" onClick={btnadd}>
              +
            </button>
          </div>

          <div>
            <button className="btndel" onClick={btnremove}>
              Remove
            </button>
          </div>
        </div>
        <p>{props.it.ProductName}</p>
        <p>${props.it.ProductPrice}</p>
      </div>
    </>
  );
};

export default ItemsInCart;
