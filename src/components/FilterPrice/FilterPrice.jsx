import { filterByPrice } from "actions"
import React from "react"
import { connect } from "react-redux"

const FilterPrice = ({onClick, children}) => {
  return (
    <div className="content-filter-price">
      <div className="title-filter-price mb-4">
        <span className="span-filter-price text-lg font-semibold">Filter by</span>
      </div>
      <form action="">
        <div className="price-80-150">
          <label htmlFor="less150">
            <input onClick={onClick} type="checkbox" id="less150"/>
            <span className="span-80-150 ml-4">{children}</span>
          </label>
        </div>
        {/* <div className="price-150-316">
          <input type="checkbox"/>
          <span className="span-150-316 ml-4">$150 - $316</span>
        </div> */}
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log("link state", state)
  return state
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: (e) => {
      console.dir(e.target.checked)
      console.log("click", props.filter)
      dispatch(filterByPrice(props.filter))
      // console.log(dispatch)
    }
  }
}
const Link = connect(null, mapDispatchToProps)(FilterPrice)

export default Link
