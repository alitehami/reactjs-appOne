import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  console.log("NavBar Stateless Function - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export { NavBar };