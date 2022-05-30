export const createNewBook = (title, author) => {
  const newBook = {};
  newBook.title = title;
  newBook.author = author;
  newBook.index = Date.now();
  return newBook;
}