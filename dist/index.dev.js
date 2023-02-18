"use strict";

/*

function showOptions() {
    const noodlesLabel = document.querySelector('label[for="noodles1"]');
    const proteinLabel = document.querySelector('label[for="noodles"]');
    const noodleChoicesDiv = document.querySelector('#noodlechoices');
    const proteinChoicesDiv = document.querySelector('#proteinchoices');
  
    noodlesLabel.addEventListener('click', () => {
        if(noodleChoicesDiv.style.display === 'none'){
            noodleChoicesDiv.style.display === 'block'
        }else{
            noodleChoicesDiv.style.display === 'block'
        }
      
    });
  
    proteinLabel.addEventListener('click', () => {
      proteinChoicesDiv.style.display = 'block';
    });
  }
  */
var noodlesButton = document.getElementById("noodlesButton");
var noodleChoices = document.getElementById("noodlechoices");
noodlesButton.addEventListener("click", function () {
  fetch("noodles.html").then(function (response) {
    return response.text();
  }).then(function (html) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, "text/html");
    var noodleChoices = doc.querySelector("#noodlechoices");

    if (noodleChoices) {
      document.body.innerHTML = "";
      document.body.appendChild(noodleChoices);
    } else {
      console.error("Failed to find noodle choices element");
    }
  })["catch"](function (error) {
    return console.error(error);
  });
});