// ## Mad Libs

// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Add an event listener to the button so that it calls a makeMadLib function when clicked.
// - In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

// const button = document.getElementById('lib-button');
// function makeMadLib () {

//     const noun = document.getElementById('noun').value;
//     const adjective = document.getElementById('adjective').value;
//     const name = document.getElementById('person').value;

//     const story = document.getElementById('story');
//     story.innerHTML = `<p>${ name } eats ${ adjective } ${ noun }.</p>`;
// };
// button.addEventListener('click', makeMadLib);

function makeMadLib () {
    const noun = $('#noun').val();
    const adjective = $('#adjective').val();
    const name = $('#person').val();
    $('#story').prepend(`<p>${ name } eats ${ adjective } ${ noun }.</p>`);
}
$('#lib-button').on('click', makeMadLib);