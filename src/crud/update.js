const toggleRead = id => {
  const storage = window.localStorage;
  const library = storage.getItem("library");
  let array = JSON.parse(library);
  const book = array[id];
  book.read = book.read ? false : true;
  storage.setItem("library", JSON.stringify(array));
};

export { toggleRead };
