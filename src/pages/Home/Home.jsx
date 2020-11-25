import Meal from "components/Meal/Meal";
import React, { useState, useEffect } from "react";
import getMeals from "../../services";
import data from "../../data-price/data-price.json";

const Home = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals(data).then((res) => setMeals(res.meals));
    // return () => {
    //   cleanup
    // }
  }, []);
  console.log(meals);
  return (
    <section className="App-menu">
      <div className="content-menu-title flex justify-center my-16">
        <h2 className="menu-title text-4xl">Tasty Menu</h2>
      </div>
      <div className="content-meals-menu flex flex-wrap justify-around">
        {/* <Meal/> */}
        {meals.map((meal) => (
          <Meal 
            key={meal.strMeal} 
            name={meal.strMeal} 
            mealSrc={meal.strMealThumb} 
            price={meal.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
