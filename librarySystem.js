class LibrarySystem {
    constructor() {
        this.books = ["The Great Gatsby", "1984", "To Kill a Mockingbird", "Moby Dick", "Pride and Prejudice"];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Book added: ${book}`);
        this.displayBooks();
    }
    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Book removed: ${book}`);
        } else {
            console.log(`Book not found: ${book}`);
        }
        this.displayBooks();
    }
    searchBook(book) {
        const found = this.books.includes(book);
        console.log(`Is "${book}" in the library? ${found}`);
    }
    findFirstOccurrence(book) {
        const index = this.books.indexOf(book);
        console.log(`First occurrence of "${book}" is at index: ${index}`);
    }
    findLastOccurrence(book) {
        const index = this.books.lastIndexOf(book);
        console.log(`Last occurrence of "${book}" is at index: ${index}`);
    }
    extractSubset(start, end) {
        const subset = this.books.slice(start, end);
        console.log(`Extracted subset: ${subset}`);
    }
    sortBooks() {
        this.books.sort((a, b) => a.localeCompare(b));
        console.log("Books sorted alphabetically.");
        this.displayBooks();
    }
    replaceBook(oldBook, newBook) {
        const index = this.books.indexOf(oldBook);
        if (index !== -1) {
            this.books.splice(index, 1, newBook);
            console.log(`Book replaced: "${oldBook}" with "${newBook}"`);
        } else {
            console.log(`Book not found: ${oldBook}`);
        }
        this.displayBooks();
    }

    joinBooks() {
        const booksString = this.books.join(", ");
        console.log("Books in the library: " + booksString);
    }

    displayBooks() {
        console.log("Current books in the library: ");
        console.log(this.books);
    }
}

const library = new LibrarySystem();

library.addBook("The Catcher in the Rye");

library.removeBook("1984");

library.searchBook("Moby Dick");

library.findFirstOccurrence("To Kill a Mockingbird");
library.findLastOccurrence("Moby Dick");

library.extractSubset(1, 3);

library.sortBooks();

library.replaceBook("Moby Dick", "War and Peace");

library.joinBooks();
