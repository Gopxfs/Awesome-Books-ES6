export const populateData = (library) => {
  const getBookInfo = JSON.parse(localStorage.getItem('bookInfo'));
  if (getBookInfo) {
    for (let i = 0; i < getBookInfo.length; i += 1) {
      library.books.push(getBookInfo[i]);
    }
  }
};

export default 'Nothing was exported';