import React from 'react';

const Create = () => {
    return (
  <div className="content-box">
    <h1>CREATE NEW COMIC</h1>
    <form action="#">
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        defaultValue="Title"
        placeholder="Enter the title"
      />
      <br />
      <label htmlFor="author">Author:</label>
      <input
        type="text"
        id="author"
        name="author"
        defaultValue="Author"
        placeholder="Enter the author"
      />
      <br />
      <label htmlFor="publisher">Publisher:</label>
      <select id="publisher" name="publisher" onchange="toggleInput()">
        <option>Select</option>
        <option value="BOOM! Box">BOOM! Box</option>
        <option value="DC Comics">DC Comics</option>
        <option value="Harry N. Abrams">Harry N. Abrams</option>
        <option value="Icon Books">Icon Books</option>
        <option value="Image Comics">Image Comics</option>
        <option value="Marvel">Marvel</option>
        <option value="Simon & Schuster">Simon &amp; Schuster</option>
        <option value="Top Shelf Productions">Top Shelf Productions</option>
        <option value="VIZ Media LLC">VIZ Media LLC</option>
      </select>
      <br />
      <label htmlFor="genre">Genre:</label>
      <input
        type="text"
        id="genre"
        name="genre"
        defaultValue="Genre"
        placeholder="Genre"
      />
      <br />
      <label htmlFor="pages">Number of Pages:</label>
      <input
        type="text"
        id="pages"
        name="pages"
        defaultValue="Number of pages"
        placeholder="Number of pages"
      />
      <br />
      <label htmlFor="rating">Rating:</label>
      <input type="text" id="rating" name="rating"/>
      <br />
      <label htmlFor="synopsis">Synopsis:</label>
      <textarea
        id="synopsis"
        name="synopsis"
        placeholder="Enter the synopsis"
        defaultValue={"Synopsis"}
      />
      <br />
      <button className="yellow-button" type="submit">
        Submit
      </button>
    </form>
  </div>
     
      );
    }
export default Create;
    