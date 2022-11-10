const newHTMLElement = function(title, content) {
    const parent = document.getElementById("row");

    const titleElement = document.createElement("h3");
    titleElement.innerText = title;
    parent.appendChild(titleElement);
    
    const contentElement = document.createElement("p");
    contentElement.innerText = content;
    parent.appendChild(contentElement);
}

const createBookInfo = function (book) {
    const parent = document.getElementById("row");
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }

    const thumbnail = book.imageLinks.thumbnail;
    const image = document.createElement("img");
    image.src = thumbnail;
    parent.appendChild(image);

    const author = book.authors.join(", ");
    newHTMLElement("Author(s)", author);

    const publishedDate = book.publishedDate
    newHTMLElement("Published date", publishedDate);

    const categories = book.categories.join(", ")
    newHTMLElement("Genre(s)", categories);

    const average_rating = book.averageRating
    newHTMLElement("Avarage rating", average_rating);
}

const request = new XMLHttpRequest();

const onSearchBook = function(event) {
    event.preventDefault();
    const bookName = document.getElementById("book-name").value;

    request.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${bookName}`);
    request.send();
    request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
            const parsedInfo = JSON.parse(request.responseText);
            const bookInfo = parsedInfo.items[0].volumeInfo;
            createBookInfo(bookInfo);
        }
    };
}

const searchForm = document.getElementById("searchForm")
searchForm.addEventListener("submit", onSearchBook);