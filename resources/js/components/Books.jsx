import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

const BooksApp = () => {
  const [books, setBooks] = useState([]);

  useEffect(()=> {
    getBookDate()
  },[]);

  function getBookDate() {
    axios.get('/api/get')
      .then(res => {
        setBooks(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
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

export default BooksApp;
