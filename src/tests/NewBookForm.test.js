import React, { useReducer } from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
// need to import this or else toHaveTextContent wont work

import { BookContext } from "../contexts/BookContext";
import NewBookForm from "../components/NewBookForm";
import bookReducer, { addBook } from "../reducer/booksReducer";

const TestNewBookForm = () => {
  const [books, dispatch] = useReducer(bookReducer, []);
  return (
    <BookContext.Provider value={{ books, addBook, dispatch }}>
      <NewBookForm />
    </BookContext.Provider>
  );
};

//allows form to add
test("if delete button is clicked on an entry, the entry is removed from the book list", () => {
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
});
