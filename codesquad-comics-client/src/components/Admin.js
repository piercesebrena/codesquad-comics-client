import React, { useState, useEffect } from 'react';
import React from 'react';
import booksData from "../data/books";

const Admin = () => {
  // Create state for books
const [books, bookSets] = useState([]);

  useEffect(() => {
    bookSets(booksData);
  }, []);
    return (
      <div>
        <span>Admin</span>  
        <header>
          {/* <!-- Start nav --> */}
          <nav className="nav-container">
            <a href="index.html">
              <img src="./public/images/CodeSquad-Comics-logo.png" alt="codesquad comics logo" className="logo"></img>   
            </a>
            {/* <!-- Hamburger menu --> */}
            <span>
              <a href="javascript:void(0);" className="nav-menu-icon"><i className="fa fa-bars"></i></a>
            </span>
            <ul>
              <li><a href="index.html">HOME</a></li>
              <li><a href="about.html">ABOUT</a></li>
              <li><a href="login.html">LOGIN</a></li>
            </ul>
          </nav>
        </header>
  
        <span className="content-box"/>
  
        <h2><strong> ADMIN PAGE</strong></h2>
        <button className="yellow-button">ADD NEW COMIC</button>
        <h3><strong>COMIC TITLES</strong></h3>
  
        <table>
          <tbody>
            {booksData.map((book, index) => (
              <tr key={index}>
                <td data-cell="Title">{book.title}</td>
                <td data-cell="EDIT"><button className="edit-button">EDIT</button></td>
                <td data-cell="DELETE"><button className="delete-button">DELETE</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Admin;
  