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

export { addNewBook };
