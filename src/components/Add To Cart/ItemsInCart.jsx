import React, { useState, useEffect } from "react";

import "../../styles/addtocartstyles.css";

const ItemsInCart = (props) => {
  const [counter, setCounter] = useState(1);
  const [testing, setTesting] = useState([]);

  const btnadd = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const btnminus = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
      // setCounter(props.picked.Quantity - 1);
    }
  };

  useEffect(() => {
    // setTesting([...testing, props.it.ProductPrice]);
    // let total = 0;
    // let sum = 0;
    // testing.map((items) => {
    //   sum = items * counter;
    // });
    // total = sum;
    // let total = props.it.ProductPrice * counter;
    let productPrice = parseInt(props.it.ProductPrice);

    props.detailsFunc(productPrice, counter);
  }, [counter]);

  // useEffect(() => {
  //   let sum = props.it.ProductPrice * counter;
  //   props.detailsFunc(sum);
  // }, [counter]);
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
            <button onClick={btnminus}>-</button>
            <p>{counter}</p>
            <button onClick={btnadd}>+</button>
          </div>
        </div>
        <p>{props.it.ProductName}</p>
        <p>${props.it.ProductPrice}</p>
      </div>
    </>
  );
};

export default ItemsInCart;
