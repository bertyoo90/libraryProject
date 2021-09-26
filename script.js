let myLibrary = []//[{book: 'Harry Potter', author: 'JK Roling', pages: '350', read: 'yes'}, {book: 'LOTR', author: 'JRR Tolkien', pages: '300', read: 'no'}];
let bookButton = document.querySelector('#book-form')
let titleBook = document.querySelector('#book')
let authorBook = document.querySelector('#author')
let numPages = document.querySelector('#number-pages')
let read = document.querySelector('#read')
let addButton = document.querySelector('#add-book')
let closeForm = document.querySelector('#close')
let libraryContainer = document.querySelector('#container')
let addNew = document.querySelector('#add-library')
let inputs = document.querySelectorAll('input')

    // function Book(title, author, pages, read) {
    //     this.title = title;
    //     this.author = author;
    //     this.pages = pages;
    //     this.read = read;
    // }

    class Book {
        constructor(title, author, pages, read) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
        }

        info() {
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
        }

        readStatusChange() {
            if ((this.read != 'yes')) {
                return this.read = 'yes';
             } if ((this.read != 'no')) {
                 return this.read = 'no';
             }
        }
    }

    // Book.prototype.info = function() {
    //     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    // }

    // Book.prototype.readStatusChange = function() {
    //     if((this.read != 'yes')){
    //         return this.read = 'yes';
    //      }if((this.read != 'no')){
    //          return this.read = 'no';
    //      }
    // }

    const addBook = (e) => {
        //ev.preventDefault(); //stops the form from submitting
        let newBook = Object.create(Book.prototype)
        newBook.title = titleBook.value;
        newBook.author = authorBook.value;
        newBook.pages = numPages.value;
        newBook.read = read.value;
        myLibrary.push(newBook)
        return newBook
    }


    addButton.addEventListener('click', () => {
        document.querySelector('#popup-container').style.display = 'flex'

    })

    closeForm.addEventListener('click', () => {
        document.querySelector('#popup-container').style.display = 'none'
    })
    

    function newButton() {
        let newBook = addBook()
        let libCard = document.createElement('div')
        libCard.classList.add('lib-card')
        libraryContainer.appendChild(libCard)
        let bookTitle = document.createElement('p')
        let bookAuthor = document.createElement('p')
        let numPages = document.createElement('p')
        let readStatus = document.createElement('p')
        readStatus.classList.add('read-status')

        let removeBook = document.createElement('button')
        removeBook.id = 'remove-book'
        removeBook.textContent = 'Remove From Library'
        removeBook.addEventListener('click', function(event){
            event.target.parentElement.remove()
            let index = myLibrary.indexOf(newBook)
            myLibrary.splice(index, 1)
        })
        bookTitle.classList.add('book-title')
        libCard.append(bookTitle, bookAuthor, numPages, readStatus, removeBook)
        bookTitle.textContent= `Title: ${document.querySelector('#book').value}`
        bookAuthor.textContent= `Written By: ${document.querySelector('#author').value}`
        numPages.textContent= `Pages: ${document.querySelector('#number-pages').value}`
        readStatus.textContent= document.querySelector('#read').value
        if(document.querySelector('#read').value == 'Yes'){
            readStatus.classList.add('green')
        }else if(document.querySelector('#read').value == 'No'){
            readStatus.classList.add('red')
        }
        readStatus.addEventListener('click', function(event){
            newBook.readStatusChange()
            if((event.target.textContent != 'Yes')){
                event.target.textContent = 'Yes'
                event.target.classList.add('green')
                event.target.classList.remove('red')
            }else if((event.target.textContent != 'No')){
                event.target.textContent = 'No'
                event.target.classList.add('red')
                event.target.classList.add('green')
            }
        })
        // document.querySelector('#popup-container').classList.remove('show')
        inputs.forEach(input => input.value = '');
        

    }

    addNew.addEventListener('click', function() {
        newButton()
        document.querySelector('#popup-container').style.display = 'none'
    })



    