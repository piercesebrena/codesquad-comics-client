import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ user, setUser }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Creating the body object with form data
    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    // Making a POST request to sign up the user
    fetch('http://localhost:8080/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        console.log('Signup successful:', data);
        localStorage.setItem('user', JSON.stringify(data));
        setUser(data);
        navigate('/admin');
      })
      .catch((error) => console.error('Error signing up:', error));
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
