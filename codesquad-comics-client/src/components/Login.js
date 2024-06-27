import React from 'react';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form has been submitted!");

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <span>Login</span>
      <form onSubmit={handleSubmit}>
  <label htmlFor="email">Email:</label>
  <input
    type="text"
    id="email"
    name="email"
    placeholder="Enter your email address"
    required
  />
  <br />
  <label htmlFor="password">Password:</label>
  <input
    type="password"
    id="password"
    name="password"
    placeholder="Enter your password"
    required
  />
  <br />
  <button type="submit">Submit</button>
</form>
</div>

);
};



  

export default Login;

