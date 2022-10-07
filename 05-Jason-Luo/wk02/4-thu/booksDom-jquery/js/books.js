

const books = [
    {
        title: 'The Design of Everyday Things',
        author: 'Don Norman',
        alreadyRead: false
    },
    {
        title: 'The Most Human Human',
        author: 'Brian  Christan',
        alreadyRead: true
    }
];

// const ul = document.createElement('ul'); //detached DOM mode
const $ul = $('<ul></ul>');


for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const $li = $('<li><</li>');
    // const li = document.createElement('li'); // detached DOM mode
    $li.html(`${book.title} by ${book.author}`);

    if (book.alreadyRead) {
        $li.addClass('already-read');
    }
    $ul.append($li);
}

$ul.appendTo("body");
// document.body.appendChild(ul);