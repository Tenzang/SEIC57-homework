
//Initialize and populate list of book objects
var books = document.getElementsByClassName("book");

//Initialize array of strings to query the API
//strings comprised of google books api URL + title and author defined in hugo front matter
var searchList = [];

//this function iterates through the book objects on the page
//and populates the searchList array with the base url + title and author defined in hugo front matter
for (i = 0; i < books.length; i++) {
  //returns the book title
  var bookTitleObj = books[i].getElementsByClassName("bookTitle");
  var bookTitle = bookTitleObj[0].innerText;

  //returns the author of the book
  var authorObj = books[i].getElementsByClassName("author");
  var author = authorObj[0].innerText;

  //combines the base URL with the book title and book author to construct the query string
  var search =
    "https://www.googleapis.com/books/v1/volumes?q=" + bookTitle + " " + author;

  //pushes the query string to the searchList array*
  searchList.push(search);
}

var list = [];

$(function () {
  makeCall();
});

async function makeCall() {
  const list = searchList.map(async function (url) {
    var result = await fetchBookData(url);
    return result;
  });
  var p = await Promise.all(list);

  var bookList = $(".book");
  for (i = 0; i < searchList.length; i++) {
    $(bookList[i]).prepend(p[i]);
  }
}

// function that takes in a search query URL from the searchList array
// and makes an ajax call on each element. From this ajax call the URL
// for the book cover thumbnail asset is extracted from the JSON data
// returned from the google servers. A JQuery img element is then created
// and the url is then embedded as its src
async function ajaxCall(url) {
  var result = await $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
  }).done(function (data) {
    return data;
  });
  //from the first book returned from the query returns the thumbnail link from JSO data
  var thumb = result.items[0].volumeInfo.imageLinks.thumbnail;
  //   var textSnippet = result.items[0].searchInfo.textSnippet;
  //constructs a jquery img object with the book cover URL embedded as src
  var imgObj = "<img src='" + thumb + "' class='bookCover'>";
  //   var snippetObj = "<div class='textSnippet'>" + textSnippet + "</div>";
  // assigns res
  var res = await Promise.resolve(imgObj);
  return res;
}

async function fetchBookData(searchString) {
  var result = await ajaxCall(searchString);
  return result;
}


