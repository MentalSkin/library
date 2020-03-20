let myLibrary = [];

//Object constructor for Books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
        //"The Hobbit by J.R.R. Tolkien, 295 pages, not read yet."
    }
}

//open form to input text and create new book instance
function createBook() {

}

//add a new book to myLibrary
function addBookToLibrary() {

}

//remove book from myLibrary
function removeBookFromLibrary() {

}

