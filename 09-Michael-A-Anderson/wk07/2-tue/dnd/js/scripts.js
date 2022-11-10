$("#chuck").on('click', function(){
    $.ajax("https://api.chucknorris.io/jokes/random").done(function(joke){
        $("#chuckNorris").html(joke.value)
    });
});
