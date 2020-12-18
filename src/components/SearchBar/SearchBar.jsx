import { filterByPrice, mealSearch } from "actions";
import React from "react";
import { connect } from "react-redux";

const SearchBar = ({onChange, onSubmit, dispatch}) => {
  // console.log(onChange, onSubmit)
  let input;
  return (
    <form onSubmit={e => {
      e.preventDefault()
      dispatch(filterByPrice("SEARCH", input.value))
      input.value = ""
    }}>
      <input
        className="text-blue h-h5 text-textcolor pl-4"
        type="text"
        // value={textSearch}
        // onChange={onChange}
        ref={node => input = node}
      />
      <button className="px-4 bg-searchcolor h-full">
        <svg className="icon icon-search">
          <use xlinkHref="#icon-search"></use>
        </svg>
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onChange: (e) => console.log(e.target.value),
    onSubmit: function(e) {
      const node = e.target.childNodes
      for(let n of node) {
        console.log(n.nodeName)
        if(n.nodeName === "INPUT") {
          console.log(n.value)
        }
      }
      console.log(node)
      e.preventDefault()

    }
  }
}

const Search = connect()(SearchBar)
export default Search;
