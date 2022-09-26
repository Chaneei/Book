import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/update.scss";
import axios from "axios";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getSelectData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books/" + path);
        setBook(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getSelectData();
  }, [path]);

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/books/" + path, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="update-form">
        <h1>Update My Book</h1>
        <input
          type="text"
          value={book.title}
          onChange={handleChange}
          name="title"
        />
        <textarea
          type="text"
          placeholder="desc"
          value={book.desc}
          onChange={handleChange}
          name="desc"
        />
        <input
          type="number"
          placeholder="price"
          value={book.price || ""}
          onChange={handleChange}
          name="price"
        />
        <input
          type="text"
          placeholder="cover"
          value={book.cover}
          onChange={handleChange}
          name="cover"
        />

        <button className="formBtn" onClick={handleClick}>
          수정하기
        </button>
      </div>
    </>
  );
};

export default Update;
