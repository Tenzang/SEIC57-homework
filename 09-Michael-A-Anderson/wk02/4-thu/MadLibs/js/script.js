// Create a new Javascript file and link to it with a script tag at the bottom.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

$('#lib-button').on("click", function(){
    console.log('click')
    $("#story").html(`${$('#person').val()} really likes ${$('#adjective').val()} ${$("#noun").val()}s`)
});