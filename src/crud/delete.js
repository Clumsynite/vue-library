const deleteBook = id => {
  const storage = window.localStorage;
  const library = storage.getItem("library");
  let array = JSON.parse(library);
  array.splice(id, 1);
  storage.setItem("library", JSON.stringify(array));
};

export { deleteBook };
