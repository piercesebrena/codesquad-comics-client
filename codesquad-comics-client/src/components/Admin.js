  import React from 'react';
  import booksData from "../data/books";
  
  const Admin = () => {
    return (
      <div>
        <span>Admin</span>  
        <span className="content-box"/>
        <h2><strong> ADMIN PAGE</strong></h2>
        <button className="yellow-button">ADD NEW COMIC</button>
        <h3><strong>COMIC TITLES</strong></h3>
        <table>
          <tbody>
            {booksData.map((book, index) => (
              <tr key={index}>
                <td data-cell="Title">{book.title}</td>
                <td data-cell="EDIT"><button className="edit-button">EDIT</button></td>
                <td data-cell="DELETE"><button className="delete-button">DELETE</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  export default Admin;
  