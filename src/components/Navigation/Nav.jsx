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
            <button>
              <a href="/services">Services</a>
            </button>
          </li>
          <li>
            <button>
              <a href="/rewards">Rewards</a>
            </button>
          </li>
          <li>
            <button>
              <a href="/experience">Experience</a>
            </button>
          </li>
          <li>
            <button>
              <a href="/aboutus">About Us</a>
            </button>
          </li>

          <li>
            <button>
              <a href="/finance">Finance</a>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
