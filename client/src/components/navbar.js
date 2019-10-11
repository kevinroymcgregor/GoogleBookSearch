import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <a className="navbar-brand" href="/">
        Book Search
      </a>
      <a className="nav-link" href="/search">Search</a>
      <a className="nav-link" href="/saved">Saved Books</a>
    </nav>
  );
}

export default Nav;
