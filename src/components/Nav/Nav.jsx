import { filterByPrice } from "actions";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Nav = ({ cartMeals, onClick }) => {
  return (
    <nav className="App-nav text-primary">
      <ul className="flex justify-around">
        <li onClick={onClick}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <div className="App-content-cart">
            <Link to="/cart">
              <div className="content-cart-icon flex relative items-center justify-center">
                <span className="cart-length text-secondary font-semibold text-xs absolute flex items-center justify-center -top-3.5 p-2 rounded-full w-25px h-25px bg-cartBg">
                  {cartMeals.length}
                </span>
                <div className="App-cart">
                  <svg className="icon icon-cart">
                    <use xlinkHref="#icon-cart"></use>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(filterByPrice("ALL"));
    }
  }
}

const mapStateToProps = (state) => {
  const { cartMeals } = state;
  return { cartMeals };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
