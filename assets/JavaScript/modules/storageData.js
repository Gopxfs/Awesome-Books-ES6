export const storageData = (library) => {
  localStorage.setItem('bookInfo', JSON.stringify(library.books));
};

export default 'Nothing was exported';