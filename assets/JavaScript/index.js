import { Library } from "./modules/library";
import { storagedData } from "./modules/storageData";
import { removeBookDiv } from "./modules/removeBookDiv";
import { createNewBookDiv } from "./modules/createBookDiv";
import { createNewBook } from "./modules/createBook";
import { populateData } from "./modules/populateData";
import * as SPA from "./modules/SPA";

const bookContainer = document.getElementById('book-list-container')
const title = document.getElementById('newBookTitle');
const author = document.getElementById('newBookAuthor');
const submitBtn = document.querySelector('newBookAdd');