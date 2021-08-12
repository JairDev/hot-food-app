import Button from "components/Button/Button";
import Price from "components/Price/Price";
import SelectOption from "components/SelectOption/SelectOption";
import { useNearScreen } from "hooks/useNearScreen/useNearScreen";
import React from "react";
import { connect } from "react-redux";
import { setQty } from "../../actions";

const classMealButton =
  "button-add relative text-base font-semibold hover-target relative";

const Meal = ({ itemMeal, handleChange }) => {
  const { ref } = useNearScreen("0px 0px 400px 0px");

  return (
    <div className="content-meal-style w-w80 md:w-w45 lg:w-w30 mb-6 hover-trigger">
      <div className="content-meal flex flex-col justify-between mb-8 relative h-full">
        <div className="img-meal relative z-50">
          <img
            ref={ref}
            className="w-full object-cover"
            src="place-holder.webp"
            alt={itemMeal.strMeal}
            data-src={itemMeal.strMealThumb}
            data-observer="observer-image"
            width="640"
            height="360"
          />
        </div>
        <div className="content-meal-all flex flex-col justify-between pt-4 pr-4 pb-12 pl-4">
          <div className="meal-description mb-4 relative z-40">
            <h3 className="text-lg font-semibold text-primary">
              {itemMeal.strMeal}
            </h3>
          </div>
          <div className="content-price-qty text-primary mb-4 flex justify-between w-full relative z-50">
            <div className="flex">
              <label className="flex">
                <span className="">Quantity:</span>
                <SelectOption onChange={handleChange} value={itemMeal.qty} />
              </label>
            </div>
            <Price children={itemMeal.price * itemMeal.qty} />
          </div>
          <div className="content-add-to-cart w-3/5 p-2 rounded-3xl flex justify-center bg-buttoncolor text-secondary relative z-50 ">
            <Button
              className={classMealButton}
              id={itemMeal.strMeal}
              meal={itemMeal}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, { itemMeal }) => {
  return {
    handleChange: (e) => {
      const { idMeal } = itemMeal;
      dispatch(setQty(e.target.value, idMeal));
    },
  };
};

export default connect(null, mapDispatchToProps)(Meal);
