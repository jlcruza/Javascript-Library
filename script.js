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
});
saveBookBtn.addEventListener('click', addBookToLibrary);

loadSampleBook();

function Book(author, title, read) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.read = read;
  this.remove = ()=>{
    let index = myLibrary.indexOf(this);
    myLibrary.splice(index, 1);
  }
}

function addBookToLibrary() {
  // do stuff here
  let authorStr = document.querySelector("#authorInput").value;
  let titleStr = document.querySelector("#titleInput").value;
  let readStr = document.querySelector("#readSelector").value;

  if(authorStr.length==0){
    alert("Type the book's author");
  }else if(titleStr.length==0){
    alert("Type the book's title");
  }else{
    let newBook = new Book(authorStr,titleStr,readStr);
    myLibrary.push(newBook);
    render();
  }
}

//Display each book in myLibrary[] to the HTML page
function render(){
  let newHTML = "";
  let bookDiv = document.querySelector("#bookArrayList");

  bookDiv.innerHTML="";
    
  myLibrary.forEach(book =>{
    newHTML+="<div class=bookRow>"
    +"<label class=bookInfo>"+book.title+"</label>"
    +"<label class=bookInfo>"+book.author+"</label>"
    +"<label class=bookInfo>"+book.read+"</label>"
    +"<button class='bookInfo'>Delete</button>"
    +"</div>"
  });

  bookDiv.innerHTML = newHTML;

}

function deleteBook(data)
{
    let div = document.querySelectorAll("#bookArrayList > div");
    div.forEach(d =>{
      let childs = d.childNodes;

      if(childs[3]==data){
        console.log(data);
      }
    })

}

function loadSampleBook(){
  let book1 = new Book("Author1","Title1","Yes");
  let book2 = new Book("Author2","Title2","No");

  myLibrary.push(book1);
  myLibrary.push(book2);

  render();
}

  const deleteButtons = document.querySelectorAll(".bookRow > button");
  console.log("BUTTONS",deleteButtons);
  deleteButtons.forEach(btn=>{
    // alert("Jjeje")
    btn.addEventListener('click', function(){
      deleteBook(btn);});
  });