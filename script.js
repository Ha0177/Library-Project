const myLibrary = [];
const cardTitle = document.querySelector(".book-title")
const cardAuthor = document.querySelector(".book-author")
const cardPages = document.querySelector(".book-pages")
const cardRead = document.querySelector(".book-read")
const newBookBtn = document.querySelector(".new-book-btn")
const addDialog = document.querySelector("#add-dialog")
const addBtn = document.querySelector(".add-btn")

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

function loadLibrary() {
    document.querySelectorAll(".book-card").forEach(card => card.remove());

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
}



newBookBtn.addEventListener("click", () => {
    addDialog.showModal();
});

addBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const title = document.querySelector("input#title")
    const author = document.querySelector("input#author")
    const pages = document.querySelector("input#pages")
    const read = document.querySelector("input#read")

    if (!title.value || !author.value || !pages.value) {
        alert("Please fill in all fields!");
        return;
    }

    addBookToLib(title.value, author.value, pages.value, read.checked);
    loadLibrary();
});

    

    