import Button from "components/Button/Button";
import Price from "components/Price/Price";
import SelectOption from "components/SelectOption/SelectOption";
import React, { useState } from "react";

const classMealButton = "text-base font-semibold";

const Meal = ({ name, mealSrc, price, onClick }) => {
  const [qty, setQty] = useState(1);

  const handleChange = (e) => {
    setQty(e.target.value);
  };

  return (
    <div className={`content-meal-style w-2/5 lg:w-w30`}>
      <div className="content-meal flex flex-col justify-between mb-8 relative h-full">
        <div className="img-meal relative z-50">
          <img className="w-full object-cover" src={mealSrc} alt="name" />
        </div>
        <div className="content-meal-all flex flex-col justify-between pt-4 pr-4 pb-12 pl-4">
          <div className="meal-description mb-4 relative z-40">
            <h3 className="text-lg font-semibold">{name}</h3>
          </div>
          <div className="content-price-qty flex justify-between w-full relative z-50">
            <SelectOption onChange={handleChange}/>
            <Price children={price} />
          </div>
          <div className="content-add-to-cart relative z-50 text-buttoncolor font-semibold">
            <Button
              children={"Add to Cart"}
              className={classMealButton}
              id={name}
              qty={qty}
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
