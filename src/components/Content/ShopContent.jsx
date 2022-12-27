import React from "react";
import DummyData from "../../images/vroomflyer6.png";

import "../../styles/shopstyles.css";

const ShopContent = () => {
  return (
    <div>
      <div className="product-container">
        <div>
          <div>
            <img className="product-image" src={DummyData} alt="dummy" />
          </div>
          <div>
            <p className="product-title">Rims</p>
            <p className="product-price">$240</p>
          </div>
          <div className="product-buttons">
            <button className="product-button-cart">Add To Cart</button>
            <button className="product-button-buy">Buy Now</button>
          </div>
        </div>
        <div>
          <div>
            <img className="product-image" src={DummyData} alt="dummy" />
          </div>
          <div>
            <p className="product-title">Rims</p>
            <p className="product-price">$240</p>
          </div>
          <div className="product-buttons">
            <button className="product-button-cart">Add To Cart</button>
            <button className="product-button-buy">Buy Now</button>
          </div>
        </div>
        <div>
          <div>
            <img className="product-image" src={DummyData} alt="dummy" />
          </div>
          <div>
            <p className="product-title">Rims</p>
            <p className="product-price">$240</p>
          </div>
          <div className="product-buttons">
            <button className="product-button-cart">Add To Cart</button>
            <button className="product-button-buy">Buy Now</button>
          </div>
        </div>
        <div>
          <div>
            <img className="product-image" src={DummyData} alt="dummy" />
          </div>
          <div>
            <p className="product-title">Rims</p>
            <p className="product-price">$240</p>
          </div>
          <div className="product-buttons">
            <button className="product-button-cart">Add To Cart</button>
            <button className="product-button-buy">Buy Now</button>
          </div>
        </div>
        <div>
          <div>
            <img className="product-image" src={DummyData} alt="dummy" />
          </div>
          <div>
            <p className="product-title">Rims</p>
            <p className="product-price">$240</p>
          </div>
          <div className="product-buttons">
            <button className="product-button-cart">Add To Cart</button>
            <button className="product-button-buy">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopContent;
