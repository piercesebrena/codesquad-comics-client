import React from 'react';

const Login = () => {
    return (
        <div>
            <span>Login</span>
            <header>
                {/* <!-- Start nav --> */}
                <nav className="nav-container">
                    <a href="index.html">
                        <img src="./public/images/CodeSquad-Comics-logo.png" alt="codesquad comics logo" className="logo" />
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
            <span className="content-box">
                <h1><strong>LOGIN</strong></h1>
                <form action="#">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" placeholder="Enter your email address" />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </span>
        </div>
    );
}

export default Login;




