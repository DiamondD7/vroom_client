import React from "react";

import "../../styles/financestyles.css";
const FinanceContent = () => {
  return (
    <div>
      <div className="title-div">
        <h2 className="finance-title">INTEREST FREE FINANCE OFFERS</h2>
      </div>
      <div className="p-div">
        <p>
          Finance for your Repairs - Interest Free at participating stores only.
        </p>
        <p>
          We have partnered with Genoapay and Finance Now to bring you heaps of
          great options for finance.
        </p>
        <p>
          <strong>Genoapay </strong>: Pay over 10 weeks with no interest or fees
          (terms and conditions apply).
        </p>
        <p>
          <strong>Finance Now </strong>: Get 12 months interest free with 24
          months to pay (terms and conditions apply).
        </p>
        <p>
          <strong>Afterpay </strong>: Pay over 6 weeks with no interest or fees
          (Available at participating stores).
        </p>
      </div>
    </div>
  );
};

export default FinanceContent;
