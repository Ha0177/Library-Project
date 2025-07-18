const myLibrary = [];
const cardTitle = document.querySelector(".book-title")
const cardAuthor = document.querySelector(".book-author")
const cardPages = document.querySelector(".book-pages")
const cardRead = document.querySelector(".book-read")

function Book(name, author, pages, read) {
   if (!new.target) {
    throw new Error("Use the new operator");
    
   }
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLib(name, author, pages, read) {
    const book = new Book(name, author, pages, read);
    myLibrary.push(book);
}

addBookToLib("hobbit", "tolkien", 250, true);
console.log(myLibrary)

array.forEach(Book => {
    cardTitle.textContent = Book.name
    cardAuthor.textContent = Book.author
    cardPages.textContent = Book.pages
    if (Book.read = true) {
        cardRead.checked
    } else  {
        cardRead.unchecked
    }
});