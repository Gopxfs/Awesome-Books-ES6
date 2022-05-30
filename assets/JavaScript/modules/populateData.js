export const populateData = () => {
  const getBookInfo = JSON.parse(localStorage.getItem('bookInfo'));
  if (getBookInfo) {
    for (let i = 0; i < getBookInfo.length; i += 1) {
      library.books.push(getBookInfo[i]);
      createNewBookDiv(`"${library.books[i].title}"\xa0\xa0\xa0`, `By ${library.books[i].author}`, library.books[i].index);
    }
  }
};