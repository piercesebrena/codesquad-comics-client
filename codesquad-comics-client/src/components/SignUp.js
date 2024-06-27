import React from 'react';

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup form has been submitted!");

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const username = e.target.username.value;
    const password = e.target.password.value;

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div>
      <span>Signup</span>
      <span className="content-box">
        <h1><strong>SIGNUP</strong></h1>
        <form onSubmit={handleSignup}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            required
          />
          <br />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            required
          />
          <br />
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
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
      </span>
    </div>
  );
};

export default Signup;
