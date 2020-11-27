import React from "react";

const SearchBar = ({ textSearch, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        className="text-blue h-h5 text-textcolor pl-4"
        type="text"
        value={textSearch}
        onChange={onChange}
      />
      <button className="px-4 bg-searchcolor h-full">
        <svg className="icon icon-search">
          <use xlinkHref="#icon-search"></use>
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
