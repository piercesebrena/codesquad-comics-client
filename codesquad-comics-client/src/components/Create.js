import React from 'react';

const Create = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form has been submitted successfully..');
        console.log('Title:', e.target.title.value);
        console.log('Author:', e.target.author.value);
        console.log('Image URL:', e.target.image.value);
        console.log('Description:', e.target.description.value);
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
