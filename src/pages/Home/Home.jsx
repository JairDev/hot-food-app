import FilterableProducts from "components/FilterableProducts/FilterableProducts";
import Header from "components/Header/Header";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

const Home = () => {
  return (
    <>
      <Header />
      <section className="App-menu p-4 lg:p-24">
        <div className="content-menu-title flex justify-center my-16 relative">
          <h2 className="menu-title text-primary text-4xl lg:text-6xl font-semibold">
            Tasty Desserts
          </h2>
        </div>
        <FilterableProducts />
      </section>
    </>
  );
};

export default Home;
