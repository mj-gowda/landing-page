"use client"
import React from "react"
import Link from "next/link";


function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          src="../Union.png"
          alt="Logo"
          className="union"
        />
        <div className="logo-text">LOGO</div>
      </div>
      <div className="menu-container">
        <Link href="#herosection"><div className="menu-item">Home</div></Link>
        <Link href="#pageone"><div className="menu-item">Page 1</div></Link>
        <Link href="#pagetwo"><div className="menu-item">Page 2</div></Link>
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default Navbar;
