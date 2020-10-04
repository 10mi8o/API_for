import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RenderRows = (props) => {
  return props.books.map(book => {
    return(
      <tr key={book.id}>
        <Link to={`book/${book.id}`}>
          <td>{book.id}</td>
        </Link>
          <td>{book.title}</td>
      </tr>
    )
  })
}

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(()=> {
    getBooks();
  },[]);

  const getBooks = async () => {
    const response = await axios.get('/api/book');
    setBooks(response.data.books);
    console.log(response.data);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
          </tr>
        </thead>
        <tbody>
          <RenderRows books={books}/>
        </tbody>
      </table>
    </>
  )
}

export default Books;
