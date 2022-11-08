
const fetchBookCover = function(e){
    e.preventDefault();
    console.log(e.target[0].value);

    const bookTitle = e.target[0].value
    // const bookTitle = document.getElementById('book-title').value

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState !==4){
            return;
        }
        const data = JSON.parse(xhr.responseText);
        const cover = data.items[0].volumeInfo.imageLinks.thumbnail
        const title = data.items[0].volumeInfo.title
        const author = data.items[0].volumeInfo.authors[0]
        
        const img = document.createElement('img');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        img.setAttribute('src', cover);
        p1.innerHTML = `Title: ${title}`;
        p2.innerHTML = `Author: ${author}`;

        document.getElementById('book-list').appendChild(img);
        document.getElementById('book-list').appendChild(p1);
        document.getElementById('book-list').appendChild(p2);

        // document.getElementById('book-title').value ='';
        e.target[0].value = '';
    }

    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`);
    xhr.send()
};

document.getElementById('form').addEventListener('submit', fetchBookCover);
