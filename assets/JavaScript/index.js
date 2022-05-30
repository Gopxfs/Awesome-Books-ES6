// Imports section
import { Library } from "./modules/library.js";
import { storageData } from "./modules/storageData.js";
import { createNewBookDiv } from "./modules/createBookDiv.js";
import { createNewBook } from "./modules/createBook.js";
import { populateData } from "./modules/populateData.js";
import { DateTime } from "./modules/luxon.js";
import { showElement } from "./modules/SPA.js";
// Setting up HTML elements and page load settings
const bookContainer = document.getElementById('book-list-container')
const title = document.getElementById('newBookTitle');
const author = document.getElementById('newBookAuthor');
const addButton = document.getElementById('newBookAdd');
const date = document.getElementById('date');
let library = new Library();
populateData(library);
showElement();
const getDate = DateTime.now();
date.innerHTML = `${getDate.monthLong} ${getDate.day} ${getDate.year}, ${getDate.hour}:${getDate.minute}:${getDate.second}`;
console.log(getDate);

const removeBookDiv = (button, index) => {
  button.addEventListener('click', () => {
    const div = document.getElementById(`book${index}`);
    bookContainer.removeChild(div);
    library.remove(index);
    storageData(library);
  });
};

if (library.books.length !== 0) {
for (let i = 0; i < library.books.length; i++) {
  const htmlElements = createNewBookDiv(`"${library.books[i].title}"\xa0\xa0\xa0`, `By ${library.books[i].author}`, library.books[i].index);
  bookContainer.appendChild(htmlElements[0]);
  removeBookDiv(htmlElements[1], library.books[i].index);
};
};

addButton.addEventListener('click', () => {
  const newBook = createNewBook(title.value, author.value);
  library.add(newBook);
  const htmlElements = createNewBookDiv(`"${newBook.title}"\xa0\xa0\xa0`, `By ${newBook.author}`, newBook.index);
  bookContainer.appendChild(htmlElements[0]);
  removeBookDiv(htmlElements[1], newBook.index);
  storageData(library);
});