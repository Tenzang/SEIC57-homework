console.log("Here you Gooo!!")

const getBookTitle = function (){

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return; // The data is not ready yet.
        }
        // convert into Json 
        
        const data = JSON.parse(xhr.responseText);

        //create a Dom Node 
            const thumbnail = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
            const title = data.items[0].volumeInfo.title;


        // put the text in the Dom Node 
        document.getElementById('book-title').innerHTML = title;
        document.getElementById('book-cover').src = thumbnail;


    };
    let title = document.getElementById('book-search').value
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`)
    xhr.send();




};
document.getElementById('search').addEventListener('click', getBookTitle);

