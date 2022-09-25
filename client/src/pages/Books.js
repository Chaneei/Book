import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/book.scss";
const Books = () => {
  const [books, setBooks] = useState([]);
  const [more, setMore] = useState(4);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/` + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="book-container">
        <h1 className="book-title">Book Store</h1>
        <div className="books">
          {books.map((book) => (
            <div className="book" key={book.id}>
              {book.cover && <img src={book.cover} alt="" />}
              <h2>{book.title}</h2>
              <p>{book.desc.slice(0, 30)}</p>
              <span>{book.price}</span>
              <div className="btn-wrap">
                <button className="duBtn" onClick={() => handleDelete(book.id)}>
                  삭제하기
                </button>
                <button className="duBtn">
                  <Link className="link" to={`/update/${book.id}`}>
                    수정하기
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <button onClick={() => setMore(more + 2)}>펼치기</button> */}
        <button className="addBtn">
          <Link to="/add" className="link">
            책 추가하기
          </Link>
        </button>
      </div>
    </>
  );
};

export default Books;
