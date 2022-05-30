export const storagedData = () => {
  localStorage.setItem('bookInfo', JSON.stringify(library.books));
};