import React, { useState } from "react";

import "../../styles/addtocartstyles.css";
import ItemsInCart from "./ItemsInCart";
const Addtocart = (props) => {
  const [total, setTotal] = useState(0);
  const [cartArray, setCartArray] = useState(props.picked);

  const btnClose = (e) => {
    e.preventDefault(); //prevents the page to reload
    props.isClose(false); //used as props for modal open and close functionality
  };

  const removeItem = (name, price, counter) => {
    //TODO set state array when an item is remove
    setCartArray((current) =>
      current.filter((item) => item.ProductName !== name)
    );
    let result = price * counter; //calculates the value that will be substract to the prevTotal
    setTotal((prevTotal) => prevTotal - result);
  };

  const getItemDetails = (price, count) => {
    //TODO get the item details and adds them up to the prevTotal
    console.log("pricetotal and count", price, count);
    setTotal((prevTotal) => prevTotal + price);
  };

  const getItemsDetailsMinus = (price, count) => {
    //TODO get the item details and substract them down to the prevTotal
    setTotal((prevTotal) => prevTotal - price);
  };

  return (
    <div>
      <div className="overlay"></div>

      <div className="popup-container">
        {cartArray.length === 0 ? (
          <div className="noItems">
            <p className="noItems-p">No Items in the cart</p>
          </div>
        ) : (
          ""
        )}
        {cartArray.map((items) => (
          <div className="addtocart-subcontainer" key={items.Id}>
            <ItemsInCart
              it={items}
              detailsFunc={getItemDetails}
              detailsFuncMinus={getItemsDetailsMinus}
              detailsFuncRemove={removeItem}
            />
          </div>
        ))}
        {cartArray.length !== 0 ? (
          <p className="total-p">Total: {total}</p>
        ) : (
          ""
        )}
      </div>
      <button className="addtocart-close-button" onClick={btnClose}>
        close
      </button>
    </div>
  );
};
export default Addtocart;
