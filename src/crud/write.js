import { newBook } from "./object.js";

const writToStorage = array => {
  const storage = window.localStorage;
  storage.setItem("library", JSON.stringify(array));
};

const addNewBook = object => {
  const storage = window.localStorage;
  const library = storage.getItem("library");
  let array = JSON.parse(library);
  array.push(object);
  writToStorage(array);
};

const template = () => {
  const storage = window.localStorage;
  const library = JSON.parse(storage.getItem("library"));
  
  const book1 = newBook("book1", "me", 100, true);
  const book2 = newBook("book2", "you", 200, false);

  if (library === null || library.length === 0) {
    writToStorage([book1, book2]);
  }
};

export { addNewBook, template };
