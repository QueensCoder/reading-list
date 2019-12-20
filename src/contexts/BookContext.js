import React, { createContext, useReducer, useEffect } from "react";
import bookReducer, { addBook, removeBook } from "../reducer/booksReducer";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  // use reducer takes a third argument, thiis function checks to see if there is
  // data inside of local storage if so the state becomes what is in local storage
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  // whenever the dom is updated the local storage is changed to reflect what is inside
  // the store, so when a book is removed from the dom it is also removed from local storage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
