import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between mx-auto bg-black">
      {/* Logo */}
      <Link to="/" className="pl-5">
        <img
          className="w-18 transition-transform duration-300 hover:scale-105"
          src="/images/nav-logo.png"
          alt="Sago Logo/Home button for navbar"
        />
      </Link>

      {/* // Navbar*/}
      <nav className="flex items-center pr-5 gap-5 text-white">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/catering">Catering</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Order now button  */}
      <a
        className="order-btn group"
        href="https://order.toasttab.com/online/sago-1004-delta-avenue"
        target="_blank"
      >
        <div className="inner">Order Now!</div>
      </a>
    </div>
  );
};

export default Navbar;
