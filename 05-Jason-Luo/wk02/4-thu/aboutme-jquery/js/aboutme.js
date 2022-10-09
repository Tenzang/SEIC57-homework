// // var fontStyle = document.getElementsByTagName("body").style.fontFamily = "Arial,sans-serif";



// var spanNick = document.getElementsByClassName("nickname");
// var spanFavor = document.getElementsByClassName("favorites");
// var spanHome = document.getElementsByClassName("hometown");

// var i;
// for (i = 0; i < spanNick.length; i++) {
//     spanNick[i].textContent = spanNick[i].textContent.replace(" ");
// }

// var y;
// for (y = 0; y < spanFavor.length; y++) {
//     spanFavor[y].textContent = spanFavor[y].textContent.replace(" ");
// }

// var z;
// for (z = 0; z < spanHome.length; z++) {
//     spanHome[z].textContent = spanHome[z].textContent.replace(" ");
// }

// // Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

// var listClass = document.getElementById("li").className = "listitem";
// var colorChange = listClass.fontStyle('red');

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.


//Alt solution
// Create a new Javascript file and link to it with a script tag at the bottom.

// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".

const $body = $("body");
// document.body.style.fontFamily = 'Arial, sans-serif';
$body.css({ "fontFamily": "Arial,sans-serif" });


// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.

// const nickname = document.getElementById('nickname');
const $nickname = $('#nickname').eq(0);
// console.log($nickname);

// nickname.innerHTML = 'The Blade';
$nickname.html('The Blade');


// document.getElementById('favorites').innerHTML = '9, 11, 555';
$("#favorites").html('9, 11, 555');

// document.getElementById('hometown').innerHTML = 'Sydney';
$("#hometown").html("Sydney");


// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// const listItems = document.getElementsByTagName('li');
const $listItems = $('li').addClass('listItem');

// for (let i = 0; i < listItems.length; i++) {
//     // const li = listItems[i];
//     const li = $listItems[i];

//     // li.className = 'listitem';
//     li.addClass('listitem');


// }
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
// const bill = document.createElement('img'); //detached DOM node
const $bill = $("<img>");

//set the source
// bill.src = "http://www.fillmurray.com/120/120";
$bill.attr("src", "http://www.fillmurray.com/120/120");

// document.body.appendChild(bill);
$body.append($bill);
