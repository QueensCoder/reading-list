import React, { useReducer } from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
// need to import this or else toHaveTextContent wont work

import { BookContext } from "../contexts/BookContext";
import { BookList, NewBookForm } from "../components";

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
// initial state is where the reducer starts at allows for reuseability to component
const TestBookContext = ({ initialState }) => {
  const [books, dispatch] = useReducer(bookReducer, initialState);
  return (
    <BookContext.Provider value={{ books, addBook, removeBook, dispatch }}>
      <BookList />
      <NewBookForm />
    </BookContext.Provider>
  );
};

//// add a book allows form to add to book list, starts with empty array
test("new book form allows use to add entry to new book list", () => {
  render(<TestBookContext initialState={[]} />);
  fireEvent.change(screen.getByLabelText(/^title/), {
    target: { value: "Art of War" }
  });
  fireEvent.change(screen.getByLabelText(/^author/), {
    target: { value: "Sun Tzu" }
  });
  fireEvent.click(screen.getByText(/^add book/));

  expect(screen.getByText(/^Art of War/)).toHaveTextContent("Art of War");
  expect(screen.getByText(/^Sun Tzu/)).toHaveTextContent("Sun Tzu");
});

//remove book
test("if use clicks on entry , the entry is removed from the book list by id", () => {
  const books = [
    { title: "1984", author: "George Orwell", id: 1 },
    { title: "Art of War", author: "Sun Tzu", id: 2 }
  ];
  render(<TestBookContext initialState={books} />);

  // remove sun tzu art of war
  fireEvent.click(screen.getByText(/^Sun Tzu/));

  // expect art of war to be not be on dom
  expect(screen.queryByText(/^Sun Tzu/)).toBeNull();
  expect(screen.queryByText(/^Art of War/)).toBeNull();

  // expect 1984 and george orwell to still be on dom
  expect(screen.getByText(/^1984/)).toHaveTextContent("1984");
  expect(screen.getByText(/^George Orwell/)).toHaveTextContent("George Orwell");
});
