const isRepeatedImage = function(imageId) {
    return $(`#${imageId}`) === null;
}

const generateURL = function(p) {
    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg'
    ].join('');
}

const showImages = function(results) {
    if (results.photos.pages === 0) {
        $('#images').append("<h3>No match results :(</h3>")
        return;
    }
    state.totalPages = results.photos.pages

    const urls = _(results.photos.photo).map(generateURL);
    _(urls).each(function(url) {
        const idValue = url.match(/https?:\/\/.+\.com\/\d+\/([^_]+)/)[1];
        if (isRepeatedImage(idValue)) return;

        const $img = $('<img>', {src: url, id: idValue});
        $img.appendTo('#images');
    });
}

const searchFlickr = function(keywords) {
    const flickrURL = 'https://www.flickr.com/services/rest';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        page: state.currentPage++,
        nojsoncallback: 1
    }).done(showImages).done(function(info) {
        console.log(info);
    });
}

const state = {
    currentPage: 1,
    totalPages: 0,
    search: undefined
}

$(document).ready(function() {
    $('#search').on('submit', function(event) {
        event.preventDefault();

        const searchTerms = $('#query').val();
        if (state.search === searchTerms) {
            return;
        }
        $("#images").empty()
        state.currentPage = 1;
        state.totalPages = 0;
        state.search = searchTerms;
        
        searchFlickr(state.search);
    });
    
    const relaxedSearchFlickr = _.debounce(searchFlickr, 1000, true);
    $(window).on('scroll', function() {
        if (state.currentPage > state.totalPages) return;
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom <= 800) {
            relaxedSearchFlickr(state.search)
        }
    });
});