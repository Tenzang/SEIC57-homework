const fetchDog = function () {
  $.ajax("https://random.dog/woof.json").done(function (data) {
    console.log(data);
    $("#root").prepend(`<img src="${data.url}">`);
  });
};

$("#fetch").on("click", fetchDog);
fetchDog(); // First Dog free
