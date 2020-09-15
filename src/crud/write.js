const writToStorage = array => {
  const storage = window.localStorage;
  storage.setItem("library", JSON.stringify(array));
};

export { writToStorage };
