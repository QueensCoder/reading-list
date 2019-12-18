import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BookContext } from "../contexts/BookContext";
import BookList from "../components/BookList";

test("allows user to add a an entry by providing the books and the author", async () => {
  const testTitle = "test";
  const testAuthor = "author";
  const books = [{ title: "abcc", author: "123", id: 1 }];
  const { getByText } = render(
    <BookContext.Provider value={{ books }}>
      <BookList />
    </BookContext.Provider>
  );
});
