import React from 'react';
import axios from 'axios';

const BookDetail = (props) => {

  const [book, setBook] = useState([]);
  useEffect(()=> {
    getBook();
  },[]);

  const getBook = async() => {

  }

  return(
    <div>
      <h1>詳細ページ</h1>
    </div>
  )
}

export default BookDetail;
