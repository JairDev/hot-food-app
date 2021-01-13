import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="App-nav">
      <ul className="flex justify-around">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <div className="App-content-cart">
            <Link to="/cart">
              <div className="App-cart">
                <svg className="icon icon-cart">
                  <use xlinkHref="#icon-cart"></use>
                </svg>
              </div>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
