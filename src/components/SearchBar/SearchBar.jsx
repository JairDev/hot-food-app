import { mealSearch } from "actions";
import React from "react";
import { connect } from "react-redux";

const SearchBar = ({ onSubmit }) => {
  let input;
  return (
    <form onSubmit={(e) => onSubmit(e, input)}>
      <input
        className="text-blue h-h5 text-textcolor pl-4"
        type="text"
        ref={(node) => (input = node)}
        placeholder="Eg. Cake, tart ..."
      />
      <button className="px-4 bg-buttoncolor h-full">
        <svg className="icon icon-search">
          <use xlinkHref="#icon-search"></use>
        </svg>
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e, input) => {
      dispatch(mealSearch(input.value));
      input = "";
      e.preventDefault();
    },
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
