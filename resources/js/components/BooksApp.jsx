import React, { useEffect, useState } from 'react';

const RenderRows = (props) => {
  return props.books.map(book => {
    return(
      <tr key={book.id}>
        <td>{book.id}</td>
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
