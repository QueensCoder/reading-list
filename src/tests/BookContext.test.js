import React, { useReducer } from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
// need to import this or else toHaveTextContent wont work

import { BookContext } from "../contexts/BookContext";
import { BookList, NewBookForm } from "../components";

// if no
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

// test to ensure the reducer and context is working with making changes to dom
import bookReducer, { addBook, removeBook } from "../reducer/booksReducer";

// component that simulates the book list and new book form
const TestNewBookForm = () => {
  const [books, dispatch] = useReducer(bookReducer, []);
  return (
    <BookContext.Provider value={{ books, addBook, dispatch }}>
      <BookList />
      <NewBookForm />
    </BookContext.Provider>
  );
};

// //allows form to add
test("new book form allows use to add and remove entry to new book list", () => {
  // add a book
  render(<TestNewBookForm />);
  fireEvent.change(screen.getByLabelText(/^title/), {
    target: { value: "Art of War" }
  });
  fireEvent.change(screen.getByLabelText(/^author/), {
    target: { value: "Sun Tzu" }
  });
  fireEvent.click(screen.getByText(/^add book/));

  expect(screen.getByText(/^Art of War/)).toHaveTextContent("Art of War");
  expect(screen.getByText(/^Sun Tzu/)).toHaveTextContent("Sun Tzu");

  //remove book
});
