const fetchCover = function (term) {

    $.ajax('https://api.fda.gov/drug/event.json?search=' + term).done(function (data) {
        //console.log(data);
        const drug = data.meta.results[0]
        $('#drug').html(drug);
    });
};



$('#search').on('submit', function (event) {
    event.preventDefault(); // stay on the same page -- don't submit the form to a server
    const term = $('#term').val();
    fetchCover(term);
});