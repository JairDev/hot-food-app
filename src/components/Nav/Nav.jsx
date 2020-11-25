import React from "react"

const links = [
  "Menu"
]

const Nav = () => {
  return (
    <nav className="App-nav">
      <ul className="flex">
        {links.map(link => <li key={link}><a href={`/${link}`}>{link}</a></li>)}
      </ul>
    </nav>
  )
}

export default Nav
 