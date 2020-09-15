const readFromStorage = () => {
  const storage = window.localStorage
  const library = storage.getItem('library')
  return JSON.parse(library)
}

export { readFromStorage }