"use strict";

//Selecting DOM elements
const textInput = document.querySelector(".inputs input");
const button = document.querySelector(".inputs button");
const infoText = document.querySelector(".info-txt");
let filterInput;

const checkPalindrome = function () {
  let reverseInput = filterInput.split("").reverse().join("");
  infoText.style.display = "block";
  if (reverseInput != filterInput) {
    infoText.textContent = `No, "${filterInput}" is not a palindrome`;
  } else if (reverseInput === filterInput) {
    infoText.textContent = `Yes, "${filterInput}" is a palindrome`;
  }
};

// Activate button
button.addEventListener("click", function () {
  checkPalindrome();
});

//"Enter" key
textInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkPalindrome();
  }
});

textInput.addEventListener("keyup", function () {
  //Filtering input, removing unnecessary symbols.
  filterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9\-]/gi, "");

  if (filterInput) {
    return button.classList.add("active");
  }
  infoText.style.display = "none";
  button.classList.remove("active");
});
