import React from 'react';
import booksData from "../data/data";

const Home = () => {
    return (
        <span>
            <span>Home</span>
          
            <span className="content-box">
                <h1>CODESQUAD COMICS</h1>
                <p>"CodeSquad Comics is a collection of graphic novels read by Sebrena. The site is intended to display comic book covers along with information about each book, including the author, a rating, and other details about the graphic novel. Browse through the complete collection below. Click on the cover image or the Details link to see even more information about each graphic novel including the publisher, genre, number of pages, and a brief synopsis. The About page includes meta information about this collection. Login is only available to the site administrator at this time."</p>
            </span>
            <br /><br />
            <span className="content-box">
                <h1>COMPLETE COMIC COLLECTION</h1>
                {booksData.map((book, index) => (
                    <span className="index-box" key={index}>
                        <a href="#">
                            <img src={`./public/images/${book.image}`} alt={book.title} className="index-images" />
                        </a>
                        <span>
                            <p><i>{book.title}</i></p>
                            <p>by {book.author}</p>
                            <p>5 Stars</p>
                            <p><a href="#" className="details-link">Details</a></p>
                        </span>
                    </span>
                ))}
            </span>
            <br /><br />
            <button className="yellow-button">
                DISPLAY MORE
            </button>
            <br /><br />
        </span>
    );
}

export default Home;
