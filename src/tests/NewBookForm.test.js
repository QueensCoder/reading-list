import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
// need to import this or else toHaveTextContent wont work

import { BookContext } from "../contexts/BookContext";
import NewBookForm from "../components/NewBookForm";

//allows form to add
test("if delete button is clicked on an entry, the entry is removed from the book list", () => {
  const books = [
    // { title: "Art of War", author: "Sun Tzu", id: 2 }
  ];
  render(
    <BookContext.Provider value={{ books }}>
      <NewBookForm />
    </BookContext.Provider>
  );
  fireEvent.change(screen.getByLabelText(/^title/), {
    target: { value: "Art of War" }
  });
  //   fireEvent.change(screen.getByLabelText(/^author/), {
  //     target: { value: "Art of War" }
  //   });
  //   fireEvent.click(screen.getByText(/^add book/));
});
