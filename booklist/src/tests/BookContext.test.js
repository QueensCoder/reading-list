import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
// need to import this or else toHaveTextContent wont work

import { BookContext } from "../contexts/BookContext";
import BookList from "../components/BookList";

test("if no books are provided the book list displays message of : 'No books to read. Hello free time'", () => {
  const books = [];
  render(
    <BookContext.Provider value={{ books }}>
      <BookList />
    </BookContext.Provider>
  );
  expect(
    screen.getByText(/^No books to read. Hello free time/)
  ).toHaveTextContent("No books to read. Hello free time");
});
