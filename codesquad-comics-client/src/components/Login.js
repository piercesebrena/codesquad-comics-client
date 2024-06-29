import React from 'react';

const Login = (e) => {
    e.preventDefault(); 
    console.log("Login form has been submitted!");
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    console.log("Email:", email);
    console.log("Password:", password);
};
    
    return (
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
    
    );
    

export default Login;




