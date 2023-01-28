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

  const removeItem = (index, price, counter) => {
    //TODO set state array when an item is remove

    // setCartArray((current) =>
    //   current.filter((item) => item.ProductName !== name)
    // );

    cartArray.splice(index, 1); //removes an item by using splice method

    let result = price * counter; //calculates the value that will be substract to the prevTotal

    props.updateCounter(1); //setting it and updating the currentCounter

    setTotal((prevTotal) => prevTotal - result);
  };

  const getItemDetails = (price, count) => {
    //TODO get the item details and adds them up to the prevTotal
    setTotal((prevTotal) => prevTotal + price);
  };

  const getItemsDetailsMinus = (price, count) => {
    //TODO get the item details and substract them down to the prevTotal
    setTotal((prevTotal) => prevTotal - price);
  };

  return (
    <div>
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
          {cartArray.map((items, index) => (
            <div className="addtocart-subcontainer" key={items.Id}>
              <ItemsInCart
                it={items}
                ind={index}
                detailsFunc={getItemDetails}
                detailsFuncMinus={getItemsDetailsMinus}
                detailsFuncRemove={removeItem}
              />
            </div>
          ))}
          {cartArray.length !== 0 ? (
            <div>
              <p className="total-p">Total: ${total}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <button className="addtocart-close-button" onClick={btnClose}>
          close
        </button>
        {cartArray.length !== 0 ? (
          <div>
            <button
              className="paynow-button"
              onClick={() => props.purch(true, cartArray, total, false)}
            >
              PAY NOW
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Addtocart;
