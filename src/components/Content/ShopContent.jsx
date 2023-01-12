import React, { useState, useEffect } from "react";
import DummyData from "../../images/vroomflyer6.png";
import { API_Product_URI } from "../../assets/Api";

import "../../styles/shopstyles.css";

const ShopContent = () => {
  const [items, setItems] = useState([]);

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
  return (
    <div>
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
              <button className="product-button-cart">Add To Cart</button>
              <button className="product-button-buy">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopContent;
