import React from "react";

import "../../styles/navstyles.css";
const Nav = () => {
  return (
    <div>
      <nav>
        <ul className="main-navigation-items">
          <li>
            <button>
              <a href="/shop">Shop</a>
            </button>
          </li>
          <li>
            <button>Services</button>
          </li>
          <li>
            <button>
              <a href="/rewards">Rewards</a>
            </button>
          </li>
          <li>
            <button>Experience</button>
          </li>
          <li>
            <button>About Us</button>
          </li>

          <li>
            <button>Finance</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
