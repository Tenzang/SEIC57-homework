let count = 0;

const searchFlickr = function (keywords) {
    count++;
    console.log('Searching for', keywords);
    const flickrURL = 'https://api.flickr.com/services/rest';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        limit: 10,
        offset: 20,
        page: count,
        nojsoncallback: 1
    }).done(showImages).done(function (info) {
        console.log(info);
    });
};

const showImages = function (results) {
    if (count <= results.photos.pages) {
        const urls = _(results.photos.photo).map(generateURL);
        _(urls).each(function (url) {
            const $img = $('<img>', {src: url});
            $img.appendTo('#images');
        });
    };
};

const generateURL = function (p) {
    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' // change 'q' to something else for different sizes (see documentation)
    ].join('');
};

$(document).ready(function () {
    $('#search').on('submit', function (event) {
        $('#images').html('');
        event.preventDefault();
        count = 0;
        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    });
});

const scrollPage = function () {
        // calculate scroll bottom
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        // if near end, get more photos
        if (scrollBottom <= 500) {
            console.log('time to get more');
            const searchTerms = $('#query').val();
            searchFlickr(searchTerms);
        }
};

const throttledScroll = _.throttle(scrollPage, 500);

$(window).on('scroll',throttledScroll);



// use underscore to prevent function running too many times