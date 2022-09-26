import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/book.scss";
const Books = () => {
  const [books, setBooks] = useState([]);
  const [more, setMore] = useState(2);
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
        <h1 className="book-title">
          <img src="https://velog.velcdn.com/images/minhyepark-dev/post/ecfb987e-f0cb-43c3-86f9-bffa58e9ba1c/blog_book2.jpg" />
        </h1>
        <div className="books">
          {books.slice(0, more).map((book) => (
            <div className="book" key={book.id}>
              {book.cover && <img src={book.cover} alt="" />}
              <h2>{book.title}</h2>
              <p>{book.desc.slice(0, 50)}...</p>
              <span>{book.price}원</span>
              <div className="btn-wrap">
                <button className="duBtn" onClick={() => handleDelete(book.id)}>
                  😥 Delete
                </button>
                <button className="duBtn">
                  <Link className="link" to={`/update/${book.id}`}>
                    😅 Update
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="addmore-wrap">
          <span
            className={more < books.length ? `moreBtn` : `noBtn`}
            onClick={() => setMore(more + 2)}
          >
            👇
          </span>
          <button className="addBtn">
            <Link to="/add" className="link">
              😊 독후감 쓰기
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Books;
