const state = {
    currentPage : 1 ,
    stopRequest :false
    };

const searchFlickr = function (keywords){
    if (state.stopRequest) return;

    console.log('searching for', keywords);

    const flickrURL= 'https://api.flickr.com/services/rest';

    state.stopRequest = true ;

    $.getJSON(flickrURL,{
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1,
        page: state.currentPage ,
        per_page: 100, // number of images per page 


    }).done(showImages)
    .done(function (results) {
      console.log(results);


    });
};
  
const showImages = function (results){
   const urls=  _(results.photos.photo).map(generateURL);
   _(urls).each(function(url){
    const $img =$('<img>', {src: url});
    $img.appendTo('#images');
   });


};

const generateURL = function(p){
    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_c.jpg' // change 'q' to something else for different sizes (see documentation)
                    // you can use c . q . m 

    ].join('')

};


$(document).ready(function () {
    
    $('#search').on('submit' , function (event){
        event.preventDefault(); // that will leave you on the same page prevent take you tpo any opther page 
        // get the search terms 
        const searchTerms = $('#query').val(); // to check that do in console $(#query)
         // search flickr


         $('#images').empty(); // empty page for new search same as .html('')
        searchFlickr(searchTerms);


       
    
    });

      // Twitchy!
      const relaxedSearchFlickr = _.debounce(searchFlickr,4000,true)
      $(window).on('scroll', function () {
        console.log("scroll")
        // CALCULATE THE SCROLL BOTTOM 
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 500) {
            state.currentPage +=1 // jump to next page 
            console.log(currentPage);
            const searchTerms = $('#query').val();
            searchFlickr(searchTerms);
        };

    });
});