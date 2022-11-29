function thumbnails(searchTerm) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }
    const data = JSON.parse(xhr.responseText);
    console.log(data);
    data.items.forEach((item) => {
      console.log(item["volumeInfo"]["title"]);
    });
  };
  xhr.open(
    "GET",
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
  );
  xhr.send();
}
document.getElementById("book").addEventListener("click", (event) => {
  searchTerm = document.getElementById("search-field").value;
});
