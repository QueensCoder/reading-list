import uuid from "uuid/v1";

const ADD_BOOK = "ADD_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";

export const addBook = (title, author) => ({ type: ADD_BOOK, title, author });
export const removeBook = id => ({ type: REMOVE_BOOK, id });

const reducer = (state, { type, title, author, id }) => {
  switch (type) {
    case ADD_BOOK:
      return [...state, { title, author, id: uuid() }];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== id);
    default:
      return state;
  }
};

export default reducer;
