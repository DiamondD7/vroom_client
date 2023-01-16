import React, { useState, useEffect } from "react";
import DummyData from "../../images/vroomflyer6.png";
import { API_Product_URI } from "../../assets/Api";

import "../../styles/shopstyles.css";
import Addtocart from "../Add To Cart/Addtocart";

const ShopContent = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalClose, setIsModalClose] = useState(false);

  useEffect(() => {
    fetch(API_Product_URI)
      .then((res) => res.json())
      .then((data) => {
        //logged in console
        console.log(data);

        //saved all data in the state Items
        setItems(data);
      })
      .catch((err) => console.log("Error is " + err));
  }, []);

  useEffect(() => {
    //this is for when the modal is open; the body's overflow will be hidden to prevent scrolling
    const bod = document.getElementById("--body");
    if (isModalOpen === true) {
      bod.style.overflow = "hidden";
    } else {
      bod.style.overflow = "auto";
    }
  }, [isModalOpen]); //the value which changes to true or false will run this useEffect

  const addToCart = (i) => {
    setCartCounter((prevCartCounter) => prevCartCounter + 1);
    setCartItems([...cartItems, i]);
  };

  const openCart = (i) => {
    setIsModalOpen(i); //change to true when true modal opens up
  };
  return (
    <div>
      {isModalOpen === true ? (
        <div className="addtocart-modal">
          <Addtocart picked={cartItems} isClose={openCart} />
        </div> // unused className
      ) : (
        ""
      )}

      <div>
        <div className="cartCounter">
          <p>{cartCounter}</p>
        </div>
        <button className="btn-icon" onClick={() => openCart(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="cart-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
      </div>
      <div className="product-container">
        {items.map((i, index) => (
          <div key={i.Id}>
            <div>
              <img className="product-image" src={i.ProductImage} alt="dummy" />
            </div>
            <div>
              <p className="product-title">{i.ProductName}</p>
              <p className="product-price">${i.ProductPrice}</p>
              <p className="product-description">{i.Description}</p>
            </div>
            <div className="product-buttons">
              <button
                className="product-button-cart"
                onClick={() => addToCart(i)}
              >
                Add To Cart
              </button>
              <button className="product-button-buy">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopContent;
