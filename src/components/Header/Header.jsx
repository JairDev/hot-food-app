import React from "react";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <div className="content-header transition duration-500 linear bg-transparent sticky -top-0 z-100">
      <header className="App-header flex justify-between flex-wrap py-6 px-4 lg:flex-nowrap lg:pl-16 lg:pr-16 font-normal relative z-50">
        <div className="content-nav w-full">
          <Nav />
        </div>
      </header>
    </div>
  );
};

export default Header;
