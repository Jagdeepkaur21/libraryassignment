// Books Array
let books = [
  {author: 'Thomas Pynchon', title: 'Bleeding Edge', genre: 'fiction', copies: 1},
  {author: 'Haruki Murakami', title: '1Q84', genre: 'fiction', copies: 2},
  {author: 'John D MacDonald', title: 'Nightmare in Pink', genre: 'mystery', copies: 1},
  {author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6', genre: 'javascript', copies: 2},
  {author: 'Thomas Phillips', title: 'Long Slow Distance', genre: 'fiction', copies: 1}
]




// issued books
let issueArr = [
  {authorname: 'Thomas Pynchon', titlebook: 'Bleeding Edge', libcard: 1},
  {authorname: 'Thomas Phillips', titlebook: '1084', libcard: 2},
  {authorname: 'Haruki Murakami', titlebook: 'Long Slow Distance', libcard: 3}
]
//user array
let user = [
  {name: 'Jagdeep', email: 'deep@gmail.com', libcard: 1, issuedbooks:0},
  {name: 'Sharan', email: 'sharan@gmail.com', libcard: 2, issuedbooks:0},
  {name: 'prabh', email: 'prabh@gmail.com', libcard: 3, issuedbooks:0}
]

//Books
function authSearch(){
	let aName = document.getElementById('authorSearch').value
	let name = books.filter((x)=>(x.author.match(aName)))
	if(name.length>0){
        document.getElementById('result').innerHTML='Yes! there is book/s by'+ aName
    for(var i=0;i<name.length;i++){
        let listItem=document.createElement('li')
        let textnode=document.createTextNode(name[i].author)
        listItem.appendChild(textnode)
        document.getElementById('result').appendChild(listItem)
        }
    }
else
    {
        document.getElementById('result').innerHTML='Sorry there is no book/s by '+ aName
    }
	}
	function addBook(book){
       books.push({author: document.getElementById('addAuthor').value, title:document.getElementById("addBook").value, genre:document.getElementById("addGenre").value, copies:document.getElementById("addCopies").value});
       document.getElementById("addAuthor").value = "";
       document.getElementById("addBook").value = "";
       document.getElementById("addGenre").value = "";
       document.getElementById("addCopies").value = "";
	}
	function showAllBooks () {
    for(var i=0;i<books.length;i++){
        let listItem=document.createElement('li')
        let textnode=document.createTextNode(books[i].title)
        listItem.appendChild(textnode)
        document.getElementById('result').appendChild(listItem)
        document.getElementById('allTheBooks').appendChild(listItem)
        }
		
	}

  //users
  function addUser(book){
       user.push({name: document.getElementById('addUser').value, email:document.getElementById("addEmail").value, libcard:document.getElementById("addCard").value});
       document.getElementById("addUser").value = "";
       document.getElementById("addEmail").value = "";
       document.getElementById("addCard").value = "";
       alert("New Library Card has been issued.");
    }

  // users records
  function showAllUsers() {
    for(var i=0;i<user.length;i++){
        let listItem=document.createElement('li')
        let textnode=document.createTextNode(user[i].name)
        listItem.appendChild(textnode)
        document.getElementById('result').appendChild(listItem)
        document.getElementById('allTheUsers').appendChild(listItem)
        }
  }
  function newBook(){
     books.push({author: document.getElementById('addAuthor').value, title:document.getElementById("addBook").value, genre:document.getElementById("addGenre").value, copies:document.getElementById("addCopies").value});
       document.getElementById("addAuthor").value = "";
       document.getElementById("addBook").value = "";
       document.getElementById("addGenre").value = "";
       document.getElementById("addCopies").value = "";
        alert("New Book has been issued.");


  }
  function recordSearch(){
  let aCard = document.getElementById('recordSearch').value
  for(var i=0;i<user.length;i++)
  {
    if(aCard===user[i].libcard){
        document.getElementById('result-user').innerHTML=user[i].name+' with Library Card No: '+ aCard +' has ' + user[i].issuedbooks +' issued to him/her.'
       }
    else
    {
        document.getElementById('result-user').innerHTML='Sorry there is no user having '+ aCard + ' Library Card No.'
    }
  }
}


// To show only welcome message on page load
  function homeload(){
    document.getElementById("home").style.display = "block";//show welcome message
    document.getElementById("books").style.display = "none";//hide books details
    document.getElementById("users").style.display = "none";//hide users details
    document.getElementById("users-records").style.display = "none";//hide users records
    document.getElementById("issuebooks").style.display = "none";//hide issue form
  }

  // To show books details when user click on BOOKS button
  function booksfunction(){
    document.getElementById("home").style.display = "none";//hide welcome message
    document.getElementById("books").style.display = "block";//show books details
    document.getElementById("users").style.display = "none";//hide users details
    document.getElementById("users-records").style.display = "none";//hide users records
    document.getElementById("issuebooks").style.display = "none";//hide issue form
  }

  //To show users details when click on USERS button
  function users(){
    document.getElementById("home").style.display = "none";//hide welcome message
    document.getElementById("books").style.display = "none";//hide books details
    document.getElementById("users").style.display = "block";//show users details
    document.getElementById("users-records").style.display = "none";//hide users records
    document.getElementById("issuebooks").style.display = "none";//hide issue form
  }
  function records(){
    document.getElementById("users-records").style.display = "block";//hide users records
    document.getElementById("home").style.display = "none";//hide welcome message
    document.getElementById("books").style.display = "none";//hide books details
    document.getElementById("users").style.display = "none";//hide users details
    document.getElementById("issuebooks").style.display = "none";//hide issue form
  }
  function issue(){
    document.getElementById("issuebooks").style.display = "block";//show issue form
    document.getElementById("users-records").style.display = "none";//hide users records
    document.getElementById("home").style.display = "none";//hide welcome message
    document.getElementById("books").style.display = "none";//hide books details
    document.getElementById("users").style.display = "none";//hide users details
  }
