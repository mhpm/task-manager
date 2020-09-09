import React from "react"

const Header = ({ title }) => {
  return (
    <nav
      className="navbar text-light navbar-dark bg-dark"
      style={{ height: 70 }}
    >
      <span className="navbar-brand mb-0"> {title}</span>
    </nav>
  )
}

export default Header
