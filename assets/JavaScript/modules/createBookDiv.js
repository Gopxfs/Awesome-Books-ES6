export const createNewBookDiv = (title, author, index) => {
  // creating html elements
  const listBook = document.createElement('li');
  const bookDiv = document.createElement('div');
  const bookContentDiv = document.createElement('div');
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');
  const removeButton = document.createElement('button');
  // settings html elements
  listBook.setAttribute('id', `book${index}`);
  removeButton.innerHTML = 'Remove';
  removeButton.classList.add('remove-button');
  removeButton.setAttribute('id', `button${index}`);
  removeBookDiv(removeButton, index);
  bookContainer.appendChild(listBook);
  listBook.append(bookContentDiv, bookDiv);
  bookContentDiv.append(bookTitle, bookAuthor);
  bookContentDiv.classList.add('book-content');
  bookDiv.append(removeButton);
  bookTitle.classList.add('book-list__title');
  bookDiv.classList.add('btn-div');
  bookTitle.innerHTML = title;
  bookAuthor.innerHTML = author;
}