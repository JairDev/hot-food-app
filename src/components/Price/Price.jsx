import React from "react"

const Price = ({children}) => {
  return (
    <div className="content-price mb-4 relative z-50 font-semibold">
      <span>${children}</span>
    </div>
  )
}

export default Price
