import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-container">
  <div>
    <h3 className="white-text">VISIT US</h3>
    <p className="footer-text">CodeSquad Comics</p>
    <p className="footer-text">123 Dorchester Ave</p>
    <p className="footer-text">Boston,MA 02124</p>
  </div>
  <div>
    <h4 className="white-text">
      <strong>LINKS</strong>
    </h4>
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
  </div>
  <div>
    <h3 className="white-text">Follow Us</h3>
    <ul>
      <a href="#">
        <i className="fab fa-facebook" />
      </a>
      <a href="#">
        <i className="fab fa-instagram" />
      </a>
      <a href="#">
        <i className="fab fa-twitter" />
      </a>
    </ul>
  </div>
  <div>
    <h3 className="white-text">
      <strong>A PRODUCT OF</strong>
    </h3>
    <a href="http://codesquad.org/" target="_blank">
      <img
        src="./public/images/CodeSquad-logo-b.png"
        alt="CodeSquad Footer Logo"
        className="footer-logo"
      />
    </a>
  </div>
</footer>

);
}
  export default Footer;