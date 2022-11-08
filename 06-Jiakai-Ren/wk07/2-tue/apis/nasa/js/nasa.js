const $results = $('#results');
function getEarthPicture () {
    $.ajax(`https://epic.gsfc.nasa.gov/api/enhanced/date/${ $('#date-input').val()}?api_key=KQWC7BiMvrrxZLhUZHXkZzbIUdk8XCHaKEFenfm3`).done(function (data) {
        if (data.length === 0) {
            $results.empty().append(`<h4>No images found on this date, use another date.</h4>`)
        } else {
            $results.empty();
            const dateInput = $('#date-input').val().split('-');
            for (let i = 0; i < data.length; i++) {
                const src = `https://epic.gsfc.nasa.gov/archive/enhanced/${ dateInput[0] }/${ dateInput[1] }/${ dateInput[2] }/png/${ data[i].image }.png`;
                $results.append(`<img src="${ src }">`);
            }
            
        }
    });
};

$('#the-button').on('click', function (event) {
    event.preventDefault();
    getEarthPicture();
});