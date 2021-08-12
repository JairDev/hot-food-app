import { mealSearch } from "actions";
import React from "react";
import { connect } from "react-redux";

const SearchBar = ({ onSubmit }) => {
  let input;
  return (
    <form onSubmit={(e) => onSubmit(e, input)}>
      <label>
        <span className="text-primary mb-2 block">Search a Dessert</span>
        <div className="flex">
          <input
            className="text-blue h-h5 text-textcolor pl-4"
            type="text"
            ref={(node) => (input = node)}
            placeholder="Eg. Cake, tart ..."
          />
          <button aria-label="Searh a Dessert" className="px-4 bg-buttoncolor">
            <svg className="icon icon-search">
              <use xlinkHref="#icon-search"></use>
            </svg>
          </button>
        </div>
      </label>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e, input) => {
      // console.log(e, input)
      dispatch(mealSearch(input.value));
      input = "";
      e.preventDefault();
    },
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
