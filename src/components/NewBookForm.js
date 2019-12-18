import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { dispatch, addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBook(title, author));
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="title">title</label>
      <input
        name="title"
        type="text"
        placeholder="book title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <label htmlFor="author"></label>
      <input
        type="text"
        placeholder="author name"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default NewBookForm;
