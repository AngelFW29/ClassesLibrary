class Library {
    constructor() {
        this.books = [];
    }

    //Library Methods.
    addBook(book) {
        this.books.push(book);
    }
    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }

    findBookByYearOrTitle(search) {
        return this.books.find(book => book.year === search || book.title === search);
    }

    listAllBook() {
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Genre: ${book.genre}`);
        });

    }

}

class Book {
    constructor(title, author, year, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }

}

// Instance of the Books.
const FirstBook = new Book('Don Quixote of La Mancha', 'Miguel de Cervantes', 1605, 'Novel');
const SecondBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Tragedy, Historical Fiction');
const ThirdBook = new Book('Pride and Prejudice', 'Jane Austen', 1813, 'Romance, Satire');
const FourthBook = new Book('To Kill a Mockingbird', 'Harper Lee', 1960, 'Southern Gothic, Bildungsroman');
const FifthBook = new Book('The Catcher in the Rye', 'J.D. Salinger', 1951, 'Realistic Fiction, Coming-of-age');

// Instance of Library
const MyLibrary = new Library();


// Use of Add Method.
MyLibrary.addBook(FirstBook);
MyLibrary.addBook(SecondBook);
MyLibrary.addBook(ThirdBook);
MyLibrary.addBook(FourthBook);
MyLibrary.addBook(FifthBook);


//Use of List All Method.
MyLibrary.listAllBook();


// Use of Find Method.
console.log(MyLibrary.findBookByYearOrTitle('Don Quixote of La Mancha'));
console.log(MyLibrary.findBookByYearOrTitle(1925));


// Use of Remove Method.
MyLibrary.removeBook('The Great Gatsby');


