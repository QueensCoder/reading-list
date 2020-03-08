import React from "react";
import BookContextProvider from "./contexts/BookContext";

import { Navbar, NewBookForm, BookList } from "./components";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
