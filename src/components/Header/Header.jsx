import React from "react"
import Nav from "../Nav/Nav"
import SearchBar from "../SearchBar/SearchBar"


const Header = ({searchText, onChange, onSubmit, searchResult}) => {
  return (
    <div className="content-header">
      <header className="App-header flex justify-between flex-wrap py-6 px-4 lg:flex-nowrap lg:pl-16 lg:pr-16 font-semibold relative z-50">
        <div className="App-content-logo">
          <div className="App-logo">Logo</div>
        </div>
        <div className="content-nav">
          <Nav/>
        </div>
        <div className="App-content-cart">
          <div className="App-cart">
          <svg className="icon icon-cart"><use xlinkHref="#icon-cart"></use></svg>
          </div>
        </div>
        <div className="content-bar-icon lg:hidden">
          <svg className="icon icon-search"><use xlinkHref="#icon-search"></use></svg>
        </div>
        <div className="App-content-search-bar w-full flex justify-center my-4 lg:my-0 lg:w-auto hidden lg:block">
          <SearchBar searchText={searchText} onChange={onChange} onSubmit={onSubmit}/>
        </div>
      </header>
      <section className="search-result">
        <div className="content-search-result">
         
        </div>
      </section>
    </div>
  )
}

export default Header
 