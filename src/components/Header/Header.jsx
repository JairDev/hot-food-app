import React from "react";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ searchText, onChange, onSubmit, searchResult }) => {
  return (
    <div className="content-header sticky -top-0">
      <header className="App-header flex justify-between flex-wrap py-9 px-4 lg:flex-nowrap lg:pl-16 lg:pr-16 font-semibold relative z-50">
        <div className="content-nav w-full">
          <Nav />
        </div>
      </header>
    </div>
  );
};

export default Header;

