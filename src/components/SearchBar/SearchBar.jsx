import React from "react"

const SearchBar = ({searchText, onChange, onSubmit}) => {

  return (
    <form onSubmit={onSubmit}>
      <input className="text-blue" type="text" value={searchText} onChange={onChange}/>
    </form>
  )
}

export default SearchBar
 