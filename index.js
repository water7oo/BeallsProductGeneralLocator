//When associate/supervisor presses search, event listener fires and it
//searches the string matching what the user inputs no matter the capitalization

//Convert the list into an array of items
//Take that current array and say if the users submission equals the first 3 elements on the array list

const numberSubmit = document.getElementById("formidSearch");
var ladieslist = document.getElementById("ladiesHead");

var LadiesArray = Array.from(ladieslist.getElementsByTagName("li"));

//uses map function to iterate through all elements and reads out their string info
var ladiesItoS = LadiesArray.map(function (li) {
  return li.textContent;
});

numberSubmit.addEventListener("submit", function searchNumber() {
  var inputNumSearch = document.getElementById("numSearch").value.toLowerCase(); // Convert input to lowercase for case-insensitive comparison
  var results = document.getElementById("Results");

  // Iterate over the first three characters of each element in the test array
  for (var i = 0; i < ladiesItoS.length; i++) {
    var firstThreeCharacters = ladiesItoS[i].substring(0, 3).toLowerCase();
    // Extract first three characters and convert to lowercase
    if (firstThreeCharacters === inputNumSearch) {
      console.log(ladiesItoS[i]);
      results.innerHTML = ladiesItoS[i];
      return; // Exit the function if a match is found
    }
  }
  console.log("No Number Found");
});

console.log(ladiesItoS);
