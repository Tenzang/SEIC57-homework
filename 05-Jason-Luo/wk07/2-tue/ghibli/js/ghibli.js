const fetchCover = function (title) {
  console.log("fetching the cover for", title);

  $.ajax(`https://ghibliapi.herokuapp.com/films`).done(function (info) {
    console.log(info);

    for (let i = 0; i < info.length; i++) {
      if (info[i].title === title) {
        const cover = info[i].image;
        $("#cover").attr("src", cover);
      }
    }
  });
};

// listen for submit event
$("#search").on("submit", function (event) {
  //find the book title
  event.preventDefault(); //prevents page moving to new page

  const title = $("#title").val();
  fetchCover(title);
  // console.log(title);
});
