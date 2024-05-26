import React from 'react';

const Create = () => {
    return (
        <div>
        <span>Create</span>
        <header>
    
    {/* <!-- Start nav --> */}
        <nav className="nav-container">
            <a href="index.html">
            <img src="./public/images/CodeSquad-Comics-logo.png" alt="codesquad comics logo" class="logo"></img>   
            </a>
    {/* <!-- Hamburger menu --> */}
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
     
</div>
          );
        }
        
        export default Create;
    