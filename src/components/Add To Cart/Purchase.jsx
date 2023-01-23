import React, { useState } from "react";

import "../../styles/purchasestyle.css";
const Purchase = (props) => {
  const [confirmed, setConfirmed] = useState(false);
  return (
    <div>
      {confirmed === false ? (
        <div>
          <h1 className="conffirmation-header">Confirmation</h1>
          <div className="prod-container">
            {props.items.map((itm) => (
              <div className="products" key={itm.Id}>
                <img
                  className="prod-image"
                  src={itm.ProductImage}
                  alt={itm.ProductName}
                />
                <p className="prod-title">{itm.ProductName}</p>
                <p>${itm.ProductPrice}</p>
              </div>
            ))}
            <p className="prod-total">Total: ${props.totalPrice}</p>
            <div className="btn-confirmation">
              <button
                className="cancel-confirmation"
                onClick={() => props.setPaid(false)}
              >
                Cancel
              </button>
              <button
                className="confirmation-button"
                onClick={() => setConfirmed(true)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="thankyou-header">Thank you for choosing us!</h1>

          <p className="email-receipt">
            Please see your e-receipt in your inbox
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="check-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>

          <button className="btn-back">
            <a href="/shop">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="back-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </a>
          </button>
        </div>
      )}
    </div>
  );
};

export default Purchase;
