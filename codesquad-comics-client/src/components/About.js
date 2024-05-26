import React from 'react';

const About = () => {
    return (
        <div>
            <span>About</span>
            <header>
    
   
            <nav className="nav-container">
                <a href="index.html">
                <img src="./public/images/CodeSquad-Comics-logo.png" alt="codesquad comics logo" class="logo"></img>   
                </a>
    
            <span>
                <a href="javascript:void(0);" className="nav-menu-icon"><i class="fa fa-bars"></i></a>
            </span>
   
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="about.html">ABOUT</a></li>
                <li><a href="login.html">LOGIN</a></li>
            </ul>
            </nav>
 
        </header>
        <span className="page-container"/>     
        <span className="content-box">
        <h1>ABOUT CODESQUAD COMICS</h1>
    
         <p className="black-text">"CodeSquad Comics is a collection of graphic novels read by Sebrena. Copyrighted images are used for review purposes only. Meta information about this collection can be found below. A detailed list of all the graphic novels in this collection can be found on the homepage. Additional details about each comic book, including the author, genre, number of pages, and a brief synopsis, can be found by navigating to the homepage and clicking the image of the book cover or the Details link for the desired graphic novel."

        </p>
    

   
    
        <h3><strong>Details</strong></h3>

        <ul>
            <li className="black-text">Total Comic Books:12</li>
            <li className="black-text">Latest Addition:12</li>
            <li className="black-text">5 Star Ratings:5</li>
            <li className="black-text">Publishers:9</li>

        </ul>
        
        </span>

        </div>
          );
        }
        
        export default About;
    

