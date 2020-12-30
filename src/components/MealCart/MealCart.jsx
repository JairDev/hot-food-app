import Price from "components/Price/Price"
import useLocalStorage from "hooks/useLocalStorage";
import React from "react"
import { connect } from "react-redux"
import { deleteCartMeal, updateQty } from "../../actions"

const MealCart = ({name, mealSrc, price, qty, onChange, onClick, id, itemMeal}) => {

  return (
    <div className="content-meal-style w-full h-h30 lg:w-30 style-cart">
    <div className="content-meal flex flex-row justify-between mb-8 relative h-full">
      <div className="img-meal h-full w-6/12 p-5 mb-4 relative z-50">
        <img className="w-full h-full object-contain  " src={mealSrc} alt="name"/>
      </div>
      <div className="content-meal-all w-6/12 flex flex-col justify-between pt-4 pr-4 pb-12 pl-4">
        <div className="meal-description mb-4 relative z-40">
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
        <div className="content-remove-meal mb-2">
          <form action="">
	    <button onClick={onClick} data-id={name}>
              Eliminate
            </button>
          </form>
        </div>
        <div className="content-price-qty flex justify-between w-full relative z-50">
          <div className="content-qty">
            <form action="">
              <select name="" id="" onChange={(e) => onChange(e)} data-id={id} value={qty}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </form>
          </div>
          <Price children={itemMeal.price * qty}/>
        </div>
      </div>
    </div>
  </div>
  )
}
const mapDispatchToProps = (dispatch, ownProps) =>{
  return {
    onClick: (e) => {
      const id = e.target.dataset.id
      e.preventDefault()
      console.log(e)
      dispatch(deleteCartMeal(id))
    },
    onChange: (e) => {
      //console.log(e.target.value)
      //console.log(ownProps)
      dispatch(updateQty(e.target.value, ownProps.itemMeal))
    }
  }
}
export default connect(null, mapDispatchToProps)(MealCart)
