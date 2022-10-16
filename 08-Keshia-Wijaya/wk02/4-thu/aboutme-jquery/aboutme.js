// console.log ("Hello World");

// Exercises: More DOM Manipulation
// About Me
// Start with this HTML and save it as "aboutme.html":

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

// Create a new Javascript file and link to it with a script tag at the bottom.
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

// (document).ready(function() {

//     $("body").click(function() {
//       $("body").append("<style>* { font-family:  monospace!important;}</style>");
//     });
//   });

 $('h1').funText(33, 'candy');


 $(document).ready(function(){
    $("body").css("font-family", "Arial, sans-serif")
  });

  $(document).ready(function(){
    $("#nickname").text("Kesh")
  });

  $(document).ready(function(){
    $("#favorites").text("Watermelon")
  });

  $(document).ready(function(){
    $("#hometown").text("Jogjakarta")
  });

  $(document).ready(function(){
    $(".listitems").css("color", "red")
  });
  

  function appendImg() {
              
    const kesh = $('<img>').attr("src", "picture.png")
   
    $("body").append(kesh);      // Append the new elements
    // kesh.appendTo('body');
  }
  appendImg()


  $('h1').funText(33, 'candy');

// OR this syntax

// var img = $('<img />', { 
//   id: 'Myid',
//   src: 'MySrc.gif',
//   alt: 'MyAlt'
// });
// img.appendTo($('#YourDiv'));