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

  const noodlesButton = document.getElementById("noodlesButton");
const noodleChoices = document.getElementById("noodlechoices");

noodlesButton.addEventListener("click", () => {
  fetch("noodles.html")
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const noodleChoices = doc.querySelector("#noodlechoices");
      if (noodleChoices) {
        document.body.innerHTML = "";
        document.body.appendChild(noodleChoices);
      } else {
        console.error("Failed to find noodle choices element");
      }
    })
    .catch(error => console.error(error));
});
