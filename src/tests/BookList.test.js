import React from "react";
import { render, screen } from "@testing-library/react";

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

test("if list of books are provided all of the books and authors will be displayed", () => {
  const books = [
    { title: "1984", author: "George Orwell", id: 1 },
    { title: "Art of War", author: "Sun Tzu", id: 2 }
  ];
  render(
    <BookContext.Provider value={{ books }}>
      <BookList />
    </BookContext.Provider>
  );
  expect(screen.getByText(/^1984/)).toHaveTextContent("1984");
  expect(screen.getByText(/^George Orwell/)).toHaveTextContent("George Orwell");
  expect(screen.getByText(/^Art of War/)).toHaveTextContent("Art of War");
  expect(screen.getByText(/^Sun Tzu/)).toHaveTextContent("Sun Tzu");
});
