const searchFlickr = function (keywords, page) {
  // console.log("Search for:", keywords);

  const flickrURL = "https://api.flickr.com/services/rest";
  $.getJSON(flickrURL, {
    method: "flickr.photos.search",
    api_key: "2f5ac274ecfac5a455f38745704ad084",
    text: keywords,
    page: page,
    format: "json",
    nojsoncallback: 1, //dont bother to looking this up: JSONP
  }).done(showImages);
  //.done(function (info) {
  //console.log(info);
  //});
};

const showImages = function (results) {
  //console.log(results.photos.pages);
  const urls = _(results.photos.photo).map(generateURL);
  _(urls).each(function (url) {
    const $img = $("<img>", { src: url });
    $img.appendTo("#images");
  });
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
    "_q.jpg", //change the q for something else for different sizes
  ].join("");
};

$(document).ready(function () {
  let page = 1;

  $("#search").on("submit", function (event) {
    page = 1;
    $("#images").empty();
    event.preventDefault();
    // // console.log("yes");
    // const searchTerms = $("#query").val();
    searchFlickr(searchTerms);
    page = page + 1;
  });

  $("#query").on("blur", function () {
    //console.log("scroll detected ", Math.random());
    //calculate the scroll bottom if we're neard the end
    //get more photos
    page = 1;
    $("#images").empty();
    const searchTerms = $("#query").val();

    searchFlickr(searchTerms, page);
    page = page + 1;
  });

  const relaxedSearchFlickr = _.debounce(searchFlickr, 4000, true);
  $(window).on("scroll", function () {
    //console.log("scroll detected ", Math.random());
    //calculate the scroll bottom if we're neard the end
    //get more photos
    const scrollBottom =
      $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom <= 500) {
      const searchTerms = $("#query").val();
      relaxedSearchFlickr(searchTerms, page);
      //searchFlickr(searchTerms, page);
      page = page + 1;
    }
  });
});
