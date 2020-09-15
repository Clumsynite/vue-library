import { newBook } from './object.js'

const writToStorage = array => {
  const storage = window.localStorage;
  storage.setItem("library", JSON.stringify(array));
};

const addNewBook = object => {
  const storage = window.localStorage
  const library = storage.getItem('library')
  let array = JSON.parse(library)
  array.push(object)
  writToStorage(array)
}

const template = () => {
  const book1 = newBook('book1', 'me', 69, true)

  const book2 = newBook('book2', 'you', 420, false)

  const storage = window.localStorage;
  storage.setItem("library", JSON.stringify([book1, book2]));
  
}

export { addNewBook, template };
