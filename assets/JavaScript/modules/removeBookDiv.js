export const removeBookDiv = (button, index) => {
  button.addEventListener('click', () => {
    const div = document.getElementById(`book${index}`);
    bookContainer.removeChild(div);
    library.remove(index);
    storagedData();
  });
}