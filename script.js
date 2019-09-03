let myLibrary = [];

const newBookBtn = document.querySelector("#newBookButton");
const cancelBookBtn = document.querySelector("#cancelNewBook");
const saveBookBtn = document.querySelector("#saveNewBook");

const AddBookPanel = document.querySelector("#newBookPanel");

newBookBtn.addEventListener('click', ()=>{
    AddBookPanel.classList.remove("invisible");
});
cancelBookBtn.addEventListener('click', ()=>{
    AddBookPanel.classList.add("invisible");
})

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