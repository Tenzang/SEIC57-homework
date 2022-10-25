// ## Calculator

// Start with this webpage, which has inputs and buttons for things to calculate: 
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.
// - Bonus: respond to key presses so that the user doesn't have to click the button.

$('body').css('font-family', 'Arial, san-serif');

// const squareButton = document.getElementById('square-button');
// const solution = document.getElementById('solution');
// function squared () {
//     const number = document.getElementById('square-input').value;
//     solution.innerHTML = `<p>${ number } squared is ${ number ** 2 }.</p>`;
// };
// squareButton.addEventListener('click', squared);

$('#square-button').on('click', function () {
    const input = Number($('#square-input').val());
    $('#solution').html(`<p>${ input } squared is ${ input ** 2 }</p>`);
});

///////

// const halfButton = document.getElementById('half-button');
// function halved () {
//     const number = document.getElementById('half-input').value;
//     solution.innerHTML = `<p>${ number } halved is ${ number / 2 }.</p>`;
// };
// halfButton.addEventListener('click', halved);

$('#half-button').on('click', function () {
    const input = Number($('#half-input').val());
    $('#solution').html(`<p>${ input } halved is ${ input / 2 }</p>`);
});

///////

// const halfButton = document.getElementById('half-button');

// function halved () {

//     const number = document.getElementById('half-input').value;
//     solution.innerHTML = `<p>${ number } halved is ${ number / 2 }.</p>`;
// };

// halfButton.addEventListener('click', halved);

///////

// const areaButton = document.getElementById('area-button');
// function areaOfCircle () {
//     const number = document.getElementById('area-input').value;
//     solution.innerHTML = `<p>Area of circle with a radius of ${ number } is ${ (Math.PI * number ** 2).toFixed(2) }.</p>`;
// };
// areaButton.addEventListener('click', areaOfCircle);

$('#area-button').on('click', function () {
    const input = Number($('#area-input').val());
    $('#solution').html(`<p>Area of circle with radius of ${ input } is ${ (Math.PI * input ** 2).toFixed(2) }.</p>`);
});