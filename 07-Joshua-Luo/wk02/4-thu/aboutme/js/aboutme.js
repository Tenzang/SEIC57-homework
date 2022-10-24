// ## About Me

// Start with this HTML and save it as "aboutme.html":
// ```html
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8"/>
//   <title>About Me</title>
// </head>
// <body>
//   <h1>About Me</h1>

//   <ul>
//     <li>Nickname: <span id="nickname"></span>
//     <li>Favorites:  <span id="favorites"></span>
//     <li>Hometown: <span id="hometown"></span>
//    </ul>

//  </body>
// </html>
// ```

// - Create a new Javascript file and link to it with a script tag at the bottom.

// - (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// - (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// - Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// - Create a new img element and set its src attribute to a picture of you. Append that element to the page.

// let body = document.body;
// body.style.fontFamily = "Arial, sans-serif";
$('body').css('font-family', 'Arial, sans-serif');

// let nickName = document.getElementById('nickname');
// let favorites = document.getElementById('favorites');
// let hometown = document.getElementById('hometown');
// nickName.innerHTML = 'Josh';
// nickName.innerHTML;
// favorites.innerHTML = 'kiwi fruit';
// hometown.innerHTML = 'Sydney';
$('#nickname').html('Josh');
$('#favorites').html('kiwi fruit');
$('#hometown').html('Sydney');



// let lis = document.getElementsByTagName('li');
// for (let i = 0; i < lis.length; i++) {
//     lis[i].className = 'listitem';
// }
// $('li').attr('class', 'listitem');
$('li').addClass('listitem');

$('<img>').attr('src', 'img/butterfly.jpg').appendTo('body');



// const img = document.createElement('img');
// img.src = "img/butterfly.jpg";
// document.body.appendChild(img);


