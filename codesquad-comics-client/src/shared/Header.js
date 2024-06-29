import React from 'react';
import useNavigate from 'react-router-dom';

const LogOut = () => {
  fetch('http://localhost:8080/logout', {
    method: 'GET',
  })
    .then((response) => {
      if (response.ok) {
        console.log('Logout was successful');
        setUser({});
        localStorage.removeItem('user');
        navigate('/');
      } else {
        throw new Error('Logout has failed');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      navigate('/admin');
    });
};

const Header = () => {
    return (
      <div>
    <h1>Header</h1>
    <nav className="nav-container">
      <a href="#">
        <img
          src="./public/images/CodeSquad-Comics-logo.png"
          alt="codesquad comics logo"
          classname="logo"
        />
      </a>
      <div>
        <a href="javascript:void(0);" classname="nav-menu-icon">
          <i classname="fa fa-bars" />
        </a>
      </div>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">LOGIN</a>
        </li>
      </ul>
    </nav>
  </div>


    )
  }
  export default Header;