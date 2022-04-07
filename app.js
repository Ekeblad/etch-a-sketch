const div = document.createElement("div");
let numOfDivs = 16;
let myDivs = [];

// UI elements
const container = document.getElementById("container");
const clearBtn = document.getElementById("clearBtn");

// Functions

clearBtn.addEventListener("click", clearDivs);

function createDiv(squareSize) {
  let squareDiv = document.createElement("div");

  squareDiv.className = "square";
  squareDiv.style.width = squareSize;
  squareDiv.style.height = squareSize;
  squareDiv.addEventListener("click", clickedDiv);
  return squareDiv;
}

function createMultipleDivs() {
  let squareSize = 500 / Math.sqrt(numOfDivs) + "px";

  for (i = 0; i < numOfDivs; i += 1) {
    myDivs.push(createDiv(squareSize));
    container.appendChild(myDivs[i]);
  }
}

function clickedDiv() {
  this.classList.toggle("clicked");
}

function clearDivs() {
  let horizontalDivs = 0;
  deleteOldDivs();
  newDivPrompt(horizontalDivs);
  createMultipleDivs();
}

function deleteOldDivs() {
  for (i = 0; i < numOfDivs; i++) {
    container.removeChild(myDivs[i]);
  }
  myDivs = [];
}

function newDivPrompt() {
  horizontalDivs = prompt("How how many squares horizontally? (between 1-100)");
  while (horizontalDivs > 100) {
    horizontalDivs = prompt("You have to stay below 100. (between 1-100)");
  }
  container.style.gridTemplateColumns = `repeat(${horizontalDivs}, 1fr)`;
  numOfDivs = horizontalDivs * horizontalDivs;
}

createMultipleDivs();
