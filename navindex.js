//When associate/supervisor presses search, event listener fires and it
//searches the string matching what the user inputs no matter the capitalization

//Convert the list into an array of items
//Take that current array and say if the users submission equals the first 3 elements on the array list

const numberSubmit = document.getElementById("formidSearch2");
const departmentSelect = document.getElementById("departmentSelect2");
const keySearcher = document.getElementById("productSearch2");
const totalDepartments = document.getElementById("StoreDepartments");
const storeRegistry = [
  ladiesItoS,
  mensItoS,
  ShoesItoS,
  YouthItoS,
  HTItoS,
  AIBItoS,
];
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

numberSubmit.addEventListener("input", function searchNumber() {
  var inputNumSearch = document.getElementById("numSearch2").value.toLowerCase(); // Convert input to lowercase for case-insensitive comparison
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
      results.innerHTML =
        "Product: " +
        ladiesItoS[i] +
        " Department: " +
        ladiesLabel.toUpperCase();
      return; // Exit the function if a match is found
    }
  }

  for (var i = 0; i < mensItoS.length; i++) {
    var firstThreeCharacters = mensItoS[i].substring(0, 3).toLowerCase();
    // Extract first three characters and convert to lowercase
    if (firstThreeCharacters === inputNumSearch) {
      console.log(mensItoS[i]);
      results.innerHTML = mensItoS[i] + "   " + mensLabel.toUpperCase();
      return; // Exit the function if a match is found
    }
  }

  for (var i = 0; i < AIBItoS.length; i++) {
    var firstThreeCharacters = AIBItoS[i].substring(0, 3).toLowerCase();
    // Extract first three characters and convert to lowercase
    if (firstThreeCharacters === inputNumSearch) {
      console.log(AIBItoS[i]);
      results.innerHTML = AIBItoS[i] + "   " + AIBLabel.toUpperCase();
      return; // Exit the function if a match is found
    }
  }

  for (var i = 0; i < ShoesItoS.length; i++) {
    var firstThreeCharacters = ShoesItoS[i].substring(0, 3).toLowerCase();
    // Extract first three characters and convert to lowercase
    if (firstThreeCharacters === inputNumSearch) {
      console.log(ShoesItoS[i]);
      results.innerHTML = ShoesItoS[i] + "   " + ShoesLabel.toUpperCase();
      return; // Exit the function if a match is found
    }
  }

  for (var i = 0; i < YouthItoS.length; i++) {
    var firstThreeCharacters = YouthItoS[i].substring(0, 3).toLowerCase();
    // Extract first three characters and convert to lowercase
    if (firstThreeCharacters === inputNumSearch) {
      console.log(YouthItoS[i]);
      results.innerHTML = YouthItoS[i] + "   " + YouthLabel.toUpperCase();
      return; // Exit the function if a match is found
    }
  }

  for (var i = 0; i < HomeItoS.length; i++) {
    var firstThreeCharacters = HomeItoS[i].substring(0, 3).toLowerCase();
    // Extract first three characters and convert to lowercase
    if (firstThreeCharacters === inputNumSearch) {
      console.log(HomeItoS[i]);
      results.innerHTML = HomeItoS[i] + "   " + HomeLabel.toUpperCase();
      return; // Exit the function if a match is found
    }
  }

  for (var i = 0; i < HTItoS.length; i++) {
    var firstThreeCharacters = HTItoS[i].substring(0, 3).toLowerCase();
    // Extract first three characters and convert to lowercase
    if (firstThreeCharacters === inputNumSearch) {
      console.log(HTItoS[i]);
      results.innerHTML = HTItoS[i] + "   " + HTLabel.toUpperCase();
      return; // Exit the function if a match is found
    }
  }
  console.log("No Number Found");
  results.innerHTML = noresults;
});

// // ONlY DISPLAYS ITEMS WITH THOSE KEY WORDS/FILTER CONTENTS
departmentSelect.addEventListener("change", function filterItems() {
  var selectedFilter = departmentSelect.value;

  //Debug
  if (selectedFilter === "None") {
    ladieslist.style.display = "none";
    menslist.style.display = "none";
    Youthlist.style.display = "none";
    Shoeslist.style.display = "none";
    HTlist.style.display = "none";
    AIBlist.style.display = "none";
    Homelist.style.display = "none";
  }

  //ALL departments
  if (selectedFilter === "ALL") {
    ladieslist.style.display = "block";
    menslist.style.display = "block";
    Youthlist.style.display = "block";
    Shoeslist.style.display = "block";
    HTlist.style.display = "block";
    AIBlist.style.display = "block";
    Homelist.style.display = "block";
  }

  //Only Ladies
  if (selectedFilter === "Ladies") {
    ladieslist.style.display = "block";
    menslist.style.display = "none";
    Youthlist.style.display = "none";
    Shoeslist.style.display = "none";
    HTlist.style.display = "none";
    AIBlist.style.display = "none";
    Homelist.style.display = "none";
  }
  //Only Mens
  if (selectedFilter === "Mens") {
    ladieslist.style.display = "none";
    menslist.style.display = "block";
    Youthlist.style.display = "none";
    Shoeslist.style.display = "none";
    HTlist.style.display = "none";
    AIBlist.style.display = "none";
    Homelist.style.display = "none";
  }
  //Only Youth
  if (selectedFilter === "Youth") {
    ladieslist.style.display = "none";
    menslist.style.display = "none";
    Youthlist.style.display = "block";
    Shoeslist.style.display = "none";
    HTlist.style.display = "none";
    AIBlist.style.display = "none";
    Homelist.style.display = "none";
  }

  //Only Home
  if (selectedFilter === "Home") {
    ladieslist.style.display = "none";
    menslist.style.display = "none";
    Youthlist.style.display = "none";
    Shoeslist.style.display = "none";
    HTlist.style.display = "none";
    AIBlist.style.display = "none";
    Homelist.style.display = "block";
  }

  //Only HT
  if (selectedFilter === "HardlineToys") {
    ladieslist.style.display = "none";
    menslist.style.display = "none";
    Youthlist.style.display = "none";
    Shoeslist.style.display = "none";
    HTlist.style.display = "block";
    AIBlist.style.display = "none";
    Homelist.style.display = "none";
  }

  //Only Shoes
  if (selectedFilter === "Shoes") {
    ladieslist.style.display = "none";
    menslist.style.display = "none";
    Youthlist.style.display = "none";
    Shoeslist.style.display = "block";
    HTlist.style.display = "none";
    AIBlist.style.display = "none";
    Homelist.style.display = "none";
  }
  //Only Accessories
  if (selectedFilter === "Accessories") {
    ladieslist.style.display = "none";
    menslist.style.display = "none";
    Youthlist.style.display = "none";
    Shoeslist.style.display = "none";
    HTlist.style.display = "none";
    AIBlist.style.display = "block";
    Homelist.style.display = "none";
  }
});

keySearcher.addEventListener("input", function KeywordSearch(event) {
  event.preventDefault(); // Prevents the form from submitting and refreshing the page

  // If string in search bar === any of the strings in store -->
  // only display the items with that string
  var storeListing = document.querySelectorAll("ul");

  var KeywordInput = document
    .getElementById("keywordSearch2")
    .value.toLowerCase();

  storeListing.forEach(function (ulElement) {
    var listings = ulElement.querySelectorAll("li");
    var matched = false;
    console.log(listings);

    listings.forEach(function (item) {
      var text = item.textContent.toLowerCase();
      if (text.includes(KeywordInput)) {
        item.style.display = "block";
        matched = true;
      } else {
        item.style.display = "none";
      }

      if (!matched) {
        ulElement.style.display = "none";
      } else {
        ulElement.style.display = "block";
      }
    });
  });
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Activate the first collapsible element on page load
if (coll.length > 0) {
  coll[0].classList.add("active");
  var content = coll[0].nextElementSibling;
  if (content) {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onload = function () {
  document.getElementById("navbar").style.top = "-500px";

  window.onscroll = function () {
    scrollFunction();
  };
};

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-500px";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".synchformidSearch");

  function syncInput(event) {
    const value = event.target.value;

    inputs.forEach((input) => {
      if (input !== event.target) {
        input.value = value;
      }
    });
  }

  inputs.forEach((input) => {
    input.addEventListener("input", syncInput);
  });
});
