const readFromStorage = () => {
  const storage = window.localStorage
  const library = localStorage.getItem('library')
  return JSON.parse(library)
}

export { readFromStorage }