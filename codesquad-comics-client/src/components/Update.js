import React from 'react';

const Update = () => {
    return (
        <div>
            <span>Update</span>
            <header>
                {/* <!-- Start nav --> */}
                <nav className="nav-container">
                    <a href="index.html">
                        <img src="./public/images/CodeSquad-Comics-logo.png" alt="codesquad comics logo" className="logo" />
                    </a>
                    {/* <!-- Hamburger menu --> */}
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
                <form action="#">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value="Title value stored in the database" placeholder="Enter the title" />
                    <br />
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" name="author" value="Author value stored in the database" placeholder="Enter the author" />
                    <br />
                    <label htmlFor="publisher">Publisher:</label>
                    <select id="publisher" name="publisher">
                        <option selected>Select</option>
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
                    <input type="text" id="genre" name="genre" value="Genre value stored in the database" placeholder="Enter the genre" />
                    <br />
                    <label htmlFor="number of pages">Number of pages:</label>
                    <input type="text" id="number-of-pages" name="number of pages" value="255" placeholder="255" />
                    <br />
                    <label htmlFor="rating">Rating:</label>
                    <input type="text" id="rating" name="rating" value="5" placeholder="5" />
                    <br />
                    <label htmlFor="synopsis">Synopsis:</label>
                    <input type="text" id="synopsis" name="synopsis" value="Title value stored in the database" placeholder="Synopsis" />
                    <br />
                    <button className="yellow-button" type="submit">Submit</button>
                </form>
            </div>
            <br />
        </div>
    );
}

export default Update;
