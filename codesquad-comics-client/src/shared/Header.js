import React from 'react';

const Header = () => {
    return (
  <nav className="nav-container">
    <a href="index.html">
      <img
        src="./public/images/CodeSquad-Comics-logo.png"
        alt="codesquad comics logo"
        className="logo"
      />
    </a>
    {/* Hamburger menu */}
    <div>
      <a href="javascript:void(0);" className="nav-menu-icon">
        <i className="fa fa-bars" />
      </a>
    </div>
    <ul>
      <li>
        <a href="index.html">HOME</a>
      </li>
      <li>
        <a href="about.html">ABOUT</a>
      </li>
      <li>
        <a href="login.html">LOGIN</a>
      </li>
    </ul>
  </nav> 
  );
}
  export default Header;