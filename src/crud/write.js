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
  const book1 = newBook("book1", "me", 100, true);

  const book2 = newBook("book2", "you", 200, false);

  const book3 = newBook("book3", "you", 300, true);

  const book4 = newBook("book4", "you", 400, false);

  const book5 = newBook("book5", "you", 500, true);

  const book6 = newBook("book6", "you", 600, false);
  const storage = window.localStorage;
  if (storage.getItem("library") == null) {
    storage.setItem(
      "library",
      JSON.stringify([book1, book2, book3, book4, book5, book6])
    );
  }
};

export { addNewBook, template };
