// console.log($.fn.jquery, _.VERSION);
var pageNumber = 1;
lastPage: false;

const searchFlickr = function (keywords) {
  if (lastPage) return;

  console.log("Searching for", keywords);

  const flickrURL = "https://api.flickr.com/services/rest";

  $.getJSON(flickrURL, {
    method: "flickr.photos.search",
    api_key: "2f5ac274ecfac5a455f38745704ad084",
    text: keywords,
    format: "json",
    page: pageNumber,
    // pages: pageEnd,
    nojsoncallback: 1, //don't bother looking this up: JSONP
  })
    .done(showImages)
    .done(function (info) {
      lastPage = info.photos.pages;
      console.log(lastPage);
      console.log(info);

      if (info.photos.page >= info.photos.pages) {
        lastPage = true;
      }
    });
  pageNumber++;
};

const showImages = function (results) {
  //   console.table(results.photos.photo);
  //   _(results.photos.photo).each(function (photo) {
  // console.log(photo);
  // generate a URL
  // display the image
  //   });
  const urls = _(results.photos.photo).map(generateURL);
  //   console.log(urls);
  _(urls).each(function (url) {
    // const $img = $("<img>").attr("src", url);
    // const $img = $(`<img src=${url}>`);
    const $img = $("<img>", { src: url });
    $img.appendTo("#images");
  });

  // if (results.length === 0) {
  //   // pause infiniate scroll if empty
  //   $("#search").infinitescroll("pause");
  // }
};

const generateURL = function (p) {
  return [
    "http://farm",
    p.farm,
    ".static.flickr.com/",
    p.server,
    "/",
    p.id,
    "_",
    p.secret,
    "_q.jpg", // change 'q' to something else for different sizes (see documentation)
  ].join("");
};

$(document).ready(function () {
  $("#search").on("submit", function (event) {
    event.preventDefault();
    console.log("yes");

    $("#images").empty("");
    pageNumber = 1;
    lastPage = false;

    // get the search terms
    const searchTerms = $("#query").val();
    searchFlickr(searchTerms);
  });

  // btnSearch.onclick = function () {

  // };

  var debouncer = _.debounce(searchFlickr, 5000, true);
  // $(window).scroll(throttled);

  $(window).on("scroll", function () {
    // console.log('scroll detected', Math.random())
    // var page = 0;
    // calculate the scroll
    const scrollBottom =
      $(document).height() - $(window).height() - $(window).scrollTop();
    // console.log(scrollBottom);
    // if we're near the end

    // if (lastPage === pageNumber) {
    //   return;
    // } //fix this

    if (scrollBottom <= 500) {
      // page++;
      //   console.log("time to get more");

      const searchTerms = $("#query").val(); //this will only load page 1, figure out how to load page 2 #done

      // searchFlickr(page++);
      debouncer(searchTerms); //figure out how to load one request each time #done

      //figure out how to make new search clear out previous search #done
      //stop making more requests when at end of result
    }
  });
});

// load next page
// ias.on('page', (e) => {
//   document.title = e.title;

//   let state = history.state;

//   history.replaceState(state, e.title, e.url);
// });
