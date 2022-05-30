export const storageData = (library) => {
  localStorage.setItem('bookInfo', JSON.stringify(library.books));
};