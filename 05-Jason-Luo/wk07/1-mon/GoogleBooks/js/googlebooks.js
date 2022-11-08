const bookSearch = function (input) {
  var search = document.getElementById("bookList").value;

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }

    const data = JSON.parse(xhr.responseText);
    const title = data.items[0].volumeInfo.title;
    const author = data.items[0].volumeInfo.authors[0];
    const picture = data.items[0].volumeInfo.imageLinks.thumbnail;

    // create a DOM node
    const b1 = document.createElement("p");
    const b2 = document.createElement("p");
    const img = document.createElement("img");

    //put the text in the DOM node
    b1.innerHTML = `Title: ${title}`;
    b2.innerHTML = `Author: ${author}`;
    img.setAttribute("src", picture);

    //attach the DOM node to the page

    document.getElementById("display").appendChild(b1);
    document.getElementById("display").appendChild(b2);
    document.getElementById("display").appendChild(img);

    // input.target[0].value = "";
  };

  xhr.open(
    "GET",
    `https://www.googleapis.com/books/v1/volumes?q=title:${search}`
  );

  xhr.send();
};

document.getElementById("button").addEventListener("click", bookSearch);
