const searchButton = document.getElementById('search-button');
const bookImage = document.getElementById('book-image');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');

function showResult () {
    const searchText = document.getElementById('search-box').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${searchText}`);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }
        const data = JSON.parse(xhr.responseText).items[0].volumeInfo;

        bookImage.src = data.imageLinks.thumbnail;
        bookImage.alt = `A book cover of ${data.title}`;
        bookTitle.innerHTML = data.title;
        bookAuthor.innerHTML = `By: ${data.authors.join(', ')}`
    };
};

searchButton.addEventListener('click', showResult);