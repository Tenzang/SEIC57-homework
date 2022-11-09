const getUrl = function(category, amount) {
    return `https://excuser.herokuapp.com/v1/excuse/${category}/${amount}`;
}

const createExcuse = function(url) {
    $.ajax(url).done(function(response) {
        const excuseParent = $('#excuse-container');
        excuseParent.empty()
        excuseParent.append(`<h3>Category: ${response[0].category}</h3>`);
        response.forEach(excuse => {
            excuseParent.append(`<p>${excuse.excuse}</p>`);    
        });
    });
}

const onExcuseSearch = function(event) {
    event.preventDefault();
    const category = $('#categories').val();
    const amount = $('#amount').val();
    const url = getUrl(category, amount);
    createExcuse(url)
}

$('#search-form').on('submit', onExcuseSearch);


const onLuckySearch = function(event) {
    event.preventDefault();
    const categories = ['family', 'office', 'children', 'college', 'party', 'funny', 'unbelievable', 'developers', 'gaming'];
    const url = getUrl(categories[Math.floor(Math.random() * categories.length)], 1);
    createExcuse(url)
}

$('#random-button').on('click', onLuckySearch);

const onGetAdvice = function(event) {
    event.preventDefault();
    $('#advice').empty()
    $.ajax('https://api.adviceslip.com/advice').done(function(response) {
        $('#advice').append(`<p>${JSON.parse(response).slip.advice}</p>`);    
    });
}

$('#advice-button').on('click', onGetAdvice);