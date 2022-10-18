// <!-- - Create a new Javascript file and link to it with a script tag at the bottom.
// - (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// - (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// - Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// - Create a new img element and set its src attribute to a picture of you. Append that element to the page. -->

$('body').css('font-family', 'sans-serif');

$('#nickname').html('Jiakai Ren');
$('#favorites').html('Maccas');
$('#hometown').html('Ningbo');

// $('li').each(function () { $(this).attr('class', 'listitem'); });
$('li').addClass('listitem');       //declarative

$('<img>').attr({src: 'https://place-puppy.com/300x300', alt: 'puppy'}).appendTo($('body'));