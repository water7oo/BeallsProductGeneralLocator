//When associate/supervisor presses search, event listener fires and it
//searches the string matching what the user inputs no matter the capitalization

const numberSubmit = document.getElementById("formidSearch");

numberSubmit.addEventListener("submit", function searchNumber() {
  var inputNumSearch = document.getElementById("numSearch");
  var results = document.getElementById("Results");
  var ladieslist = document.getElementById("ladiesHead");
  var ladiesElements = ladieslist.getElementsByTagName("li");

  if (inputNumSearch != "") {
    results.innerHTML = parseFloat(inputNumSearch.value);
    console.log(parseFloat(inputNumSearch.value));
  }
});
