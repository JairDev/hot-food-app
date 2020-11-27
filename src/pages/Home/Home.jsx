import FilterableProducts from "components/FilterableProducts/FilterableProducts";
import Header from "components/Header/Header";
import React from "react";

const Home = ({onPush}) => {
  return (
    <>
      <Header/>
      <section className="App-menu p-4 lg:p-24">
        <div className="content-menu-title flex justify-center my-16 font-semibold relative">
          <h2 className="menu-title text-4xl lg:text-6xl">Tasty Menu</h2>
        </div>
        <FilterableProducts onPush={onPush}/>
      </section>
    </>
  );
};

export default Home;
