$.ajax("http://api.open-notify.org/astros.json")

const fetchName = function () {
    $.ajax('http://api.open-notify.org/astros.json').done(function (response) {
        const people = response.people
        console.log (people.map( x => x.name))
        const allNames = people.map( x => x.name)
        $('body').append(`<p>${allNames}</p>`);
    });
};

$('#fetch').on('click', fetchName);

// fetchName();

