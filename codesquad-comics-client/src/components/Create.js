import React from 'react';
import { Navigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create an object with the form data
    const body = {
      title: e.target.title.value,
      author: e.target.author.value,
      image: e.target.image.value,
      description: e.target.description.value,
      // Add other fields as needed
    };

    // Make a POST request to the API to create a new book
    fetch("http://localhost:8080/api/books/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body), // Convert the body object to a JSON string
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok'); // Handle non-2xx HTTP responses
      }
      console.log('Book created successfully'); // Log success message
      navigate("/admin"); // Navigate to the admin page
    })
    .catch(error => {
      console.error('Create error:', error); // Log error message
    });
  };

  return (
    <div>
      <span>Create</span>
      <header>
        {/* Start nav */}
        <nav className="nav-container">
          <a href="index.html">
            <img src="./public/images/CodeSquad-Comics-logo.png" alt="codesquad comics logo" className="logo" />
          </a>
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

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" required />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" name="image" required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;


    return (
        <div>
            <span>Create</span>
            <header>
                {/* Start nav */}
                <nav className="nav-container">
                    <a href="index.html">
                        <img src="./public/images/CodeSquad-Comics-logo.png" alt="codesquad comics logo" className="logo" />
                    </a>
                    {/* Hamburger menu */}
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

            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" required />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" name="author" required />
                </div>
                <div>
                    <label htmlFor="image">Image URL:</label>
                    <input type="text" id="image" name="image" required />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" required></textarea>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default Create;
