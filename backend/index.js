import express from "express";
import mysql from "mysql";
const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1071",
  database: "data",
});

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

//전체 데이터 가져오기
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//데이터 입력하기
app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)";
  const values = [req.body.title, req.body.desc, req.body.cover];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("책 만들기 성공");
  });
});

app.listen(8800, () => {
  console.log("Connected to Backend!");
});
