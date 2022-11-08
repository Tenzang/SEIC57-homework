const fetchBook = function () {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }

        const data = JSON.parse( xhr.responseText );

        const p = document.createElement('p');
        p.innerHTML = data.text;
        document.body.appendChild(p);
    };

    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:${'${ book_title }');
    xhr.send(); 
};


fetchBook();