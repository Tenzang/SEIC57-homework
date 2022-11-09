const fetchBeer = function () {
    // const title = $('#title').val();
    $.ajax('https://api.punkapi.com/v2/beers/random').done(function (data) {
        console.log(data);
        $('.info').html(`<p><strong>Name:</strong> ${ data[0].tagline } ${ data[0].name }</p>`);
        $('.info').append(`<p><strong>Description:</strong> ${ data[0].description }</p>`);
        $('.info').append(`<p><strong>ABV:</strong> ${ data[0].abv }</p>`);
        $('#beer').attr('src', data[0].image_url);
        $('#beer').attr('width', 75);
        $('#beer').attr('height', 75);
    });

};

$('#search').on('click', fetchBeer);