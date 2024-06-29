import React from 'react';

const Footer = () => {
    return (
        <div>
            <h1>Footer</h1>
            <footer class="footer-container">
        <div>
            <h3 class="white-text">VISIT US</h3>
            <p class="footer-text">CodeSquad Comics</p>
            <p class="footer-text">123 Dorchester Ave</p>
            <p class="footer-text">Boston,MA 02124</p>
            
        
        </div>
       <div>
        
        <h4 class="white-text"><strong>LINKS</strong></h4>
        <ul>
            <li><a href ="#">HOME</a></li>
            <li><a href ="#">ABOUT</a></li>
            <li><a href ="#">LOGIN</a></li>
       </ul>

       </div>
       <div>
        <h3 class="white-text">Follow Us</h3>
        <ul>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
        </ul>
       </div>
       
        <div>
            <h3 class="white-text"><strong>A PRODUCT OF</strong></h3>
        <a href="#" target="_blank"/>
        <img src="./public/images/CodeSquad-logo-b.png" alt="CodeSquad Footer Logo" class="footer-logo"/>   
        </div>
    

    </footer>
    
    </div>
    );
};
  










  export default Footer;