import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Update() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    author: '',
    
  });

  useEffect(() => {
    // Fetch book details when the component mounts
    fetch(`http://localhost:8080/api/books/${bookId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        console.log('Book data:', data);
        setBook(data);
      })
      .catch((error) => console.error('Error fetching book:', error));
  }, [bookId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the body object with form data
    const body = {
      title: e.target.title.value,
      author: e.target.author.value,
      // Add other fields as necessary
    };

    // Making a PUT request to update the book
    fetch(`http://localhost:8080/api/books/edit/${bookId}`, {
      method: 'PUT',
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
        console.log('Update successful:', data);
        setBook(data);
        navigate('/admin');
      })
      .catch((error) => console.error('Error updating book:', error));
  };
  return (
    <div>
      <h1>Update Book</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} required />
        </label>
        <br />
        <label>
          Author:
          <input type="text" name="author" value={book.author} onChange={(e) => setBook({ ...book, author: e.target.value })} required />
        </label>
        <br />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default Update;
