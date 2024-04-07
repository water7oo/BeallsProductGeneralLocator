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

var menslist = document.getElementById("menHead");
var mensArray = Array.from(menslist.getElementsByTagName("li"));
//uses map function to iterate through all elements and reads out their string info
var mensItoS = mensArray.map(function (li) {
  return li.textContent;
});

var Shoeslist = document.getElementById("ShoesHead");
var ShoesArray = Array.from(Shoeslist.getElementsByTagName("li"));
//uses map function to iterate through all elements and reads out their string info
var ShoesItoS = ShoesArray.map(function (li) {
  return li.textContent;
});

var Youthlist = document.getElementById("YouthHead");
var YouthArray = Array.from(Youthlist.getElementsByTagName("li"));
//uses map function to iterate through all elements and reads out their string info
var YouthItoS = YouthArray.map(function (li) {
  return li.textContent;
});

var Homelist = document.getElementById("HomeHead");
var HomeArray = Array.from(Homelist.getElementsByTagName("li"));
//uses map function to iterate through all elements and reads out their string info
var HomeItoS = HomeArray.map(function (li) {
  return li.textContent;
});

var HTlist = document.getElementById("HTHead");
var HTArray = Array.from(HTlist.getElementsByTagName("li"));
//uses map function to iterate through all elements and reads out their string info
var HTItoS = HTArray.map(function (li) {
  return li.textContent;
});

var AIBlist = document.getElementById("AIBHead");
var AIBArray = Array.from(AIBlist.getElementsByTagName("li"));
//uses map function to iterate through all elements and reads out their string info
var AIBItoS = AIBArray.map(function (li) {
  return li.textContent;
});

numberSubmit.addEventListener("submit", function searchNumber() {
  var inputNumSearch = document.getElementById("numSearch").value.toLowerCase(); // Convert input to lowercase for case-insensitive comparison
  var results = document.getElementById("Results");
  var noresults = "No Number Found";
  var ladiesLabel = document.getElementById("ladieslabel").innerHTML;
  var mensLabel = document.getElementById("mensLabel").innerHTML;
  var AIBLabel = document.getElementById("AIBLabel").innerHTML;
  var ShoesLabel = document.getElementById("ShoesLabel").innerHTML;
  var YouthLabel = document.getElementById("YouthLabel").innerHTML;
  var HomeLabel = document.getElementById("HomeLabel").innerHTML;
  var HTLabel = document.getElementById("HTLabel").innerHTML;

  // Iterate over the first three characters of each element in the test array
  for (var i = 0; i < ladiesItoS.length; i++) {
    var firstThreeCharacters = ladiesItoS[i].substring(0, 3).toLowerCase();
    // Extract first three characters and convert to lowercase
    if (firstThreeCharacters === inputNumSearch) {
      console.log(ladiesItoS[i]);
      results.innerHTML = ladiesItoS[i] + " DEPARTMENT:  " + ladiesLabel;
      return; // Exit the function if a match is found
    }
  }

  for (var i = 0; i < mensItoS.length; i++) {
    var firstThreeCharacters = mensItoS[i].substring(0, 3).toLowerCase();
    // Extract first three characters and convert to lowercase
    if (firstThreeCharacters === inputNumSearch) {
      console.log(mensItoS[i]);
      results.innerHTML = mensItoS[i] + " DEPARTMENT:  " + mensLabel;
      return; // Exit the function if a match is found
    }
  }

  for (var i = 0; i < AIBItoS.length; i++) {
    var firstThreeCharacters = AIBItoS[i].substring(0, 3).toLowerCase();
    // Extract first three characters and convert to lowercase
    if (firstThreeCharacters === inputNumSearch) {
      console.log(AIBItoS[i]);
      results.innerHTML = AIBItoS[i] + " DEPARTMENT:  " + AIBLabel;
      return; // Exit the function if a match is found
    }
  }

  for (var i = 0; i < ShoesItoS.length; i++) {
    var firstThreeCharacters = ShoesItoS[i].substring(0, 3).toLowerCase();
    // Extract first three characters and convert to lowercase
    if (firstThreeCharacters === inputNumSearch) {
      console.log(ShoesItoS[i]);
      results.innerHTML = ShoesItoS[i] + " DEPARTMENT:  " + ShoesLabel;
      return; // Exit the function if a match is found
    }
  }

  for (var i = 0; i < YouthItoS.length; i++) {
    var firstThreeCharacters = YouthItoS[i].substring(0, 3).toLowerCase();
    // Extract first three characters and convert to lowercase
    if (firstThreeCharacters === inputNumSearch) {
      console.log(YouthItoS[i]);
      results.innerHTML = YouthItoS[i] + " DEPARTMENT:  " + YouthLabel;
      return; // Exit the function if a match is found
    }
  }

  for (var i = 0; i < HomeItoS.length; i++) {
    var firstThreeCharacters = HomeItoS[i].substring(0, 3).toLowerCase();
    // Extract first three characters and convert to lowercase
    if (firstThreeCharacters === inputNumSearch) {
      console.log(HomeItoS[i]);
      results.innerHTML = HomeItoS[i] + " DEPARTMENT:  " + HomeLabel;
      return; // Exit the function if a match is found
    }
  }

  for (var i = 0; i < HTItoS.length; i++) {
    var firstThreeCharacters = HTItoS[i].substring(0, 3).toLowerCase();
    // Extract first three characters and convert to lowercase
    if (firstThreeCharacters === inputNumSearch) {
      console.log(HTItoS[i]);
      results.innerHTML = HTItoS[i] + " DEPARTMENT:  " + HTLabel;
      return; // Exit the function if a match is found
    }
  }
  console.log("No Number Found");
  results.innerHTML = noresults;
});

console.log(ladiesItoS);
console.log(mensItoS);
console.log(AIBItoS);
console.log(YouthItoS);
console.log(ShoesItoS);
console.log(HomeItoS);
console.log(HTItoS);
