import React from "react";
import { NavLink } from "react-router-dom"
import House from "../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"

function NavBar() {
  return (
    <nav>
      <NavLink to="/">
        <img src={House} alt="house" /> 
      </NavLink>
    </nav>
  );
}

export default NavBar;
