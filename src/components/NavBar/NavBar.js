import React from "react";
import "./nav.css";

const NavBar = ({text}) => {
  return (
    <div className="nav_bar">
      <h1>CIS</h1>
      <h1>{text}</h1>
    </div>
  );
};

export default NavBar;
