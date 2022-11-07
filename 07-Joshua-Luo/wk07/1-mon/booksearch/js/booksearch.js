const fetchBook = function () {
    const bookTitle = document.getElementById("title").value
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }

        const data = JSON.parse(xhr.responseText);
        cover = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
        const img = document.createElement('img');
        img.src = cover;
        document.body.appendChild(img);
        // console.log('data is ready', data.text);

    };

    xhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`);
    xhr.send();
};

document.getElementById("search").addEventListener('click', fetchBook);

