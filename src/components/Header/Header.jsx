import React from "react"
import Nav from "../Nav/Nav"
import SearchBar from "../SearchBar/SearchBar"


const Header = () => {
  return (
    <div className="content-header ">
      <header className="App-header flex justify-between flex-wrap p-4 lg:flex-nowrap">
        <div className="App-content-logo">
          <div className="App-logo">Logo</div>
        </div>
        <div className="content-nav">
          <Nav/>
        </div>
        <div className="App-content-cart">
          <div className="App-cart">Cart</div>
        </div>
        <div className="content-bar-icon lg:hidden">
          icon
        </div>
        <div className="App-content-search-bar w-full flex justify-center my-4 lg:my-0 lg:w-auto hidden">
          <SearchBar/>
        </div>
      </header>
      <section className="search-result">
        <div className="content-search-result"></div>
      </section>
    </div>
  )
}

export default Header
 