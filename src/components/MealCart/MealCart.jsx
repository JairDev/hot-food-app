import Price from "components/Price/Price";
import SelectOption from "components/SelectOption/SelectOption";
import React from "react";
import { connect } from "react-redux";
import { deleteCartMeal, updateQty } from "../../actions";

const MealCart = ({ onChange, onClick, itemMeal }) => {
  return (
    <div className="content-meal-style w-full h-h30 lg:w-30 style-cart">
      <div className="content-meal flex flex-row justify-between mb-8 relative h-full">
        <div className="img-meal h-full w-6/12 p-5 mb-4 relative z-50">
          <img
            className="w-full h-full object-contain  "
            src={itemMeal.strMealThumb}
            alt="name"
          />
        </div>
        <div className="content-meal-all w-6/12 flex flex-col justify-between pt-4 pr-4 pb-12 pl-4">
          <div className="meal-description mb-4 relative z-40">
            <h3 className="text-lg font-semibold">{itemMeal.strMeal}</h3>
          </div>
          <div className="content-remove-meal mb-2">
            <form action="">
              <button className="textactioncolor" onClick={onClick}>
                Eliminate
              </button>
            </form>
          </div>
          <div className="content-price-qty flex justify-between w-full relative z-50">
            <div className="content-qty flex">
              <span>Quantity:</span>
              <SelectOption
                onChange={(e) => onChange(e)}
                value={itemMeal.qty}
              />
            </div>
            <Price>{itemMeal.price * itemMeal.qty}</Price>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch, { itemMeal }) => {
  const { idMeal } = itemMeal;
  return {
    onClick: (e) => {
      dispatch(deleteCartMeal(idMeal));
      e.preventDefault();
    },
    onChange: (e) => {
      dispatch(updateQty(e.target.value, idMeal));
    },
  };
};
export default connect(null, mapDispatchToProps)(MealCart);
