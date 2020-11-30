import React from "react"



const Button = ({children, className, onClick, id, qty}) => {
  return (
    <div className="content-button">
      <form action="">
        <button onClick={onClick} data-id={id} data-qty={qty} className={`${className}`}>
          {children}
        </button>
      </form>
    </div>
  )
}

export default Button
