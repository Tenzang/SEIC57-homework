
const fetchBook= function () {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
    // console.log('ready state changed', xhr.responseText, xhr.readyState);
        if (xhr.readyState !== 4) {
            return;
        }
        let book = document.getElementById('#book');
        // console.log('the data is ready', xhr.responseText);
        const data = JSON.parse ( xhr.responseText );
        const p = document.createElement("p");
        p.innerHTML = `<img src="${data.items[0]['volumeInfo']['imageLinks']['thumbnail']}">`;
        document.body.appendChild(p);
    };

// AJAX request is finished when xhr.readyState equals 4

    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ book }?json`);
    xhr.send();

};

document.getElementById('fetch').addEventListener('click', fetchBook);
