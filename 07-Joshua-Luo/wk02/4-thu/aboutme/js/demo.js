// - (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// $('body').css({'font-family': 'Arial, sans serif'});
$('body').css('font-family', 'Arial, sans serif');

// - (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
const $nickname = $('#nickname');
$nickname.html('The Blade');

$('#favorites').html('9, 11, 555');
$('#hometown').html('Sydney');

// - Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
$('li').addClass('listitem'); // declarative

// - Create a new img element and set its src attribute to a picture of you. Append that element to the page.
$('<img src="http://www.fillmurray.com/120/120">').attr({ alt: 'Bill Murray' }).appendTo('body');
