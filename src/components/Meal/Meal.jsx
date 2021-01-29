import Button from "components/Button/Button";
import Price from "components/Price/Price";
import SelectOption from "components/SelectOption/SelectOption";
import React from "react";
import { connect } from "react-redux";
import { setQty } from "../../actions";
const classMealButton = "text-base font-semibold";

const Meal = ({ itemMeal, handleChange }) => {
  return (
    <div className={`content-meal-style w-w80 md:w-w45 lg:w-w30 mb-6`}>
      <div className="content-meal flex flex-col justify-between mb-8 relative h-full">
        <div className="img-meal relative z-50">
          <img
            className="w-full object-cover"
            src={itemMeal.strMealThumb}
            alt="name"
          />
        </div>
        <div className="content-meal-all flex flex-col justify-between pt-4 pr-4 pb-12 pl-4">
          <div className="meal-description mb-4 relative z-40">
            <h3 className="text-lg font-semibold text-primary">{itemMeal.strMeal}</h3>
          </div>
          <div className="content-price-qty text-primary flex justify-between w-full relative z-50">
            <SelectOption onChange={handleChange} />
            <Price children={itemMeal.price} />
          </div>
          <div className="content-add-to-cart relative z-50 text-textactioncolor font-semibold">
            <Button
              children={"Add to Cart"}
              className={classMealButton}
              id={itemMeal.strMeal}
              meal={itemMeal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => {
      dispatch(setQty(e.target.value));
    },
  };
};

export default connect(null, mapDispatchToProps)(Meal);
