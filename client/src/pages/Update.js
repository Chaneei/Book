import React from "react";
import "../styles/update.scss";
const Update = () => {
  return (
    <>
      <div className="update-form">
        <h1>책 수정하기</h1>
        <input type="text" placeholder="title" name="title" />
        <textarea type="text" placeholder="desc" name="desc" />
        <input type="number" placeholder="price" name="price" />
        <input type="text" placeholder="cover" name="cover" />

        <button className="formBtn">수정하기</button>
      </div>
    </>
  );
};

export default Update;
