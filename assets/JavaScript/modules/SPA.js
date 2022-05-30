const navBarAnchors = document.querySelectorAll('#navbar > ul > li');
const bookSection = document.getElementById('book-list');
const addBookSection = document.getElementById('add-book');
const contactSection = document.getElementById('contact');
// Show the content that is clicked
const showContent = (position) =>{
  if (position === 0) {
    bookSection.classList.remove('hideAll');
    addBookSection.classList.add('hideAll');
    contactSection.classList.add('hideAll');
  } else if (position === 1) {
    bookSection.classList.add('hideAll');
    addBookSection.classList.remove('hideAll');
    contactSection.classList.add('hideAll');
  } else if (position === 2) {
    bookSection.classList.add('hideAll');
    addBookSection.classList.add('hideAll');
    contactSection.classList.remove('hideAll');
  }
}
// Giving the event listener to the anchor tags
export const showElement = () => {
  for (let i = 0; i < navBarAnchors.length; i += 1) {
    navBarAnchors[i].addEventListener('click', () => {
      showContent(i);
    });
  }
};