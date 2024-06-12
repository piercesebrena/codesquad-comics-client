import React, { useState, useEffect } from 'react';
import booksData from "../data/booksData";

const Update = () => {
    const id = 1; // Example ID, adjust this as needed

    const [book, bookSet] = useState({});

    useEffect(() => {
        const foundBook = booksData.find(book => book.id === id);
        bookSet(foundBook);
    }, [id]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form has been submitted');
        console.log('Title:', e.target.title.value);
        console.log('Author:', e.target.author.value);
        console.log('Publisher:', e.target.publisher.value);
        console.log('Genre:', e.target.genre.value);
        console.log('Number of pages:', e.target['number of pages'].value);
        console.log('Rating:', e.target.rating.value);
        console.log('Synopsis:', e.target.synopsis.value);
    };

    return (
        <div>
            <span>Update</span>
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
            <div className="content-box">
                <h1>UPDATE COMIC</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" defaultValue={book.title} placeholder="Enter the title" required />
                    <br />
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" name="author" defaultValue={book.author} placeholder="Enter the author" required />
                    <br />
                    <label htmlFor="publisher">Publisher:</label>
                    <select id="publisher" name="publisher" defaultValue={book.publisher} required>
                        <option value="">Select</option>
                        <option value="BOOM! Box">BOOM! Box</option>
                        <option value="DC Comics">DC Comics</option>
                        <option value="Harry N. Abrams">Harry N. Abrams</option>
                        <option value="Icon Books">Icon Books</option>
                        <option value="Image Comics">Image Comics</option>
                        <option value="Marvel">Marvel</option>
                        <option value="Simon & Schuster">Simon & Schuster</option>
                        <option value="Top Shelf Productions">Top Shelf Productions</option>
                        <option value="VIZ Media LLC">VIZ Media LLC</option>
                    </select>
                    <br />
                    <label htmlFor="genre">Genre:</label>
                    <input type="text" id="genre" name="genre" defaultValue={book.genre} placeholder="Enter the genre" required />
                    <br />
                    <label htmlFor="number of pages">Number of pages:</label>
                    <input type="text" id="number-of-pages" name="number of pages" defaultValue={book.pages} placeholder="Enter the number of pages" required />
                    <br />
                    <label htmlFor="rating">Rating:</label>
                    <input type="text" id="rating" name="rating" defaultValue={book.rating} placeholder="Enter the rating" required />
                    <br />
                    <label htmlFor="synopsis">Synopsis:</label>
                    <input type="text" id="synopsis" name="synopsis" defaultValue={book.synopsis} placeholder="Enter the synopsis" required />
                    <br />
                    <button className="yellow-button" type="submit">Submit</button>
                </form>
            </div>
            <br />
        </div>
    );
}

export default Update;
