function apiFinished(data) {
  data["people"].forEach((p) => {
    $("#div").append(`<p>${p.name}</p>`);
  });
}

function peopleInSpace() {
  $.ajax("http://api.open-notify.org/astros.json").done(apiFinished);
}
$("#people").on("click", peopleInSpace);
