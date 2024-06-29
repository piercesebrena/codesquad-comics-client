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
      console.error('Error creating book:', error); // Log error message
    });
  };

  return (
    <div>
      <span>Create</span>
      <span>
      <h1>Create Book</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" required />
        </label>
        <br />
        <label>
          Author:
          <input type="text" name="author" required />
        </label>
        <br />
        <label>
          Genre:
          <input type="text" name="genre" required />
        </label>
        <br />
        <label>
          Publication Date:
          <input type="date" name="publicationDate" required />
        </label>
        <br />
        {/* Add other fields here as necessary */}
        <button type="submit">Create</button>
      </form>
    </span>
  </div>
  );
}

export default Create;
