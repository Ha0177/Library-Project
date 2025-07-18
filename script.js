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

addBookToLib("hobbit", "tolkien", 250, false);

myLibrary.forEach(Book => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    const title = document.createElement("h2");
    title.classList.add("book-title");
    title.textContent = Book.name;

    const author = document.createElement("p");
    author.classList.add("book-author");
    author.textContent = "Author: " + Book.author;

    const pages = document.createElement("p")
    pages.classList.add("book-pages");
    pages.textContent = "Pages: " + Book.pages;

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("book-read");
    checkbox.checked = Book.read;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode("Read"));

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(label);

    document.body.appendChild(card);
});