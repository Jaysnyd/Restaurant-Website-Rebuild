import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-2">
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/catering">Catering</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
