const myLibrary = [];
const newBookBtn = document.querySelector(".new-book-btn")
const addDialog = document.querySelector("#add-dialog")
const addBtn = document.querySelector(".add-btn")

class Book {
    constructor(name, author, pages, read) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    updateRead() {
        this.read = !this.read;
    }

    static addBookToLib(name, author, pages, read) {
        const book = new Book(name, author, pages, read);
        myLibrary.push(book);
    }
}

function loadLibrary() {
    document.querySelectorAll(".book-card").forEach(card => card.remove());

    myLibrary.forEach(Book => {
        const card = document.createElement("div");
            card.classList.add("book-card");
            card.dataset.id = Book.id;
        
            const removeBtn = document.createElement("button");
            removeBtn.classList.add("remove-btn");
            removeBtn.textContent = "X";

            removeBtn.addEventListener("click", () => {
                const index = myLibrary.findIndex(book => book.id === card.dataset.id);
                if (index !== -1) {
                    myLibrary.splice(index, 1);
                }
                loadLibrary();
            });

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
            checkbox.addEventListener("click", () => {
                Book.updateRead();
                loadLibrary();
            })
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode("Read"));
        
            card.appendChild(removeBtn);
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

    Book.addBookToLib(title.value, author.value, pages.value, read.checked);
    loadLibrary();
});

    

    