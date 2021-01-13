import { filterByPrice } from "actions"
import React from "react"
import { connect } from "react-redux"

const FilterPrice = ({onClick, children}) => {
  return (
    <div className="content-filter-price">
      <form action="">
        <div className="meals-price">
          <label htmlFor="">
            <input  onClick={onClick} type="checkbox" id="price"/>
            <span className="span-80-150 ml-4 text-lg">{children}</span>
          </label>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log("link state", state)
  return state
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (e) => {
      e.target.checked ? dispatch(filterByPrice(ownProps.filter)) : dispatch(filterByPrice("ALL"))
    }
  }
}
const Link = connect(null, mapDispatchToProps)(FilterPrice)

export default Link
