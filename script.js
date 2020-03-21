let myLibrary = [];

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'No')
const book2 = new Book('Meditations', 'Marcus Aurelius', 200, 'Yes')
const book3 = new Book('Thinking Fast and Slow', 'Daniel Kahneman', 400, 'No')

//renders the content from myLibrary into a HTML table
function render(library){
    
    let table = document.getElementById('tableBody')
    
    //1. clear table content
    while (table.rows.length >= 1) {
        table.deleteRow(0)
    }
    //2. Append each book
    for (let i = 0; i < myLibrary.length; i++) {

        //add new row with ID and class
        let row = table.insertRow(0)
        row.setAttribute('id', `${i}`)
        if (i % 2 === 0) {row.classList.add('even')} else {row.classList.add('odd')}

        //create and fill row cells
        let titleCell = row.insertCell(0)
        let authorCell = row.insertCell(1)
        let pagesCell = row.insertCell(2)
        let readCell = row.insertCell(3)

        titleCell.innerHTML = library[i].title
        authorCell.innerHTML = library[i].author
        pagesCell.innerHTML = library[i].pages
        readCell.innerHTML = library[i].read
    }
}

//Object constructor for Books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

//add a new book to myLibrary; assign to button after user input
function addBookToLibrary(book) {
    myLibrary.push(book)
    render(myLibrary)
}

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)












//remove book from myLibrary
function removeBookFromLibrary() {

}

//toggle read / not read

