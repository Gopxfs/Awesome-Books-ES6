export function createNewBook() {
  const newBook = {};
  newBook.title = title.value;
  newBook.author = author.value;
  newBook.index = Date.now();
  library.add(newBook);
  return newBook;
}