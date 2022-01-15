import React from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";

const NavBar = ({ text }) => {
  const nevigate = useNavigate();
  return (
    <div className="nav_bar">
      <h1>CIS</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "20%",
        }}
      >
        <h1
          style={{ cursor: "pointer" }}
          onClick={() => {
            nevigate("/");
          }}
        >
          {text}
        </h1>
        <h1
          id="add__user"
          onClick={() => {
            nevigate("/form");
          }}
        >
          Add User
        </h1>
      </div>
    </div>
  );
};

export default NavBar;
