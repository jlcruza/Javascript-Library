let myLibrary = [];

const newBookBtn = document.querySelector("#newBookButton");
newBookBtn.addEventListener('click', addBookToLibrary());

function Book(author, title, read) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

//Display each book in myLibrary[] to the HTML page
function render(){
    myLibrary.forEach(book =>{

    })
}