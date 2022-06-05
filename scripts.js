var newPaletteBtn = document.querySelector('#newPaletteBtn');
var savePaletteBtn = document.querySelector('#savePaletteBtn')
var hexCode = document.querySelectorAll('#hexCode')
var boxes = document.querySelectorAll('.box')
var lockIcon = document.querySelectorAll('.lock-icon')
var savedPaletteSection = document.querySelector(".saved-palettes")

var currentPalette;
var savedPalettes = [];

window.addEventListener('load', createPalette);
newPaletteBtn.addEventListener('click', randomizePalette);
savePaletteBtn.addEventListener('click', savePalette);
lockIcon.forEach(function(img) {
  img.addEventListener('click', toggleLockIcon)
})
savedPaletteSection.addEventListener("click", function(event) {
  deletePalette(event);
});

class Color {
  constructor() {
    this.locked = false;
    this.hexCode = '';
    this.randomColor();
  }
  randomColor() {
    var hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    var hex = '#';
    for (var i = 0; i < 6; i++) {
      hex += hexValues[(Math.floor(Math.random() * hexValues.length))];
    }
    this.hexCode = hex;
  }
}

class Palette {
  constructor() {
    this.id = Date.now();
    this.colors = [];
    for (var i = 0; i < 5; i++) {
      this.colors.push(new Color())
    }
  }
  randomizeColors() {
    for (var i = 0; i < this.colors.length; i++) {
      if (this.colors[i].locked === false)
        this.colors[i].randomColor();
    }
  }
}

function createPalette() {
  currentPalette = new Palette();
  showPalette();
}

function randomizePalette() {
  currentPalette.randomizeColors();
  showPalette();
}

function savePalette() {
  savedPalettes.push(currentPalette);
  showSavedPalette()
  createPalette();
  for (var i = 0; i < 5; i++) {
    lockIcon[i].src = "assets/unlocked.png"
  }
}

function showPalette() {
  for (var i = 0; i < currentPalette.colors.length; i++) {
    hexCode[i].innerText = currentPalette.colors[i].hexCode
    boxes[i].style.backgroundColor = currentPalette.colors[i].hexCode
  }
}

function toggleLockIcon(event) {
  var lockImage = "assets/locked.png"
  var unlockImage = "assets/unlocked.png"
  var targetColorIndex = parseInt(event.target.getAttribute("data-color-index"))
      if (currentPalette.colors[targetColorIndex].locked === false) {
        event.target.src = lockImage
        currentPalette.colors[targetColorIndex].locked = true;
      } else {
        event.target.src = unlockImage;
        currentPalette.colors[targetColorIndex].locked = false;
      }
}

function showSavedPalette() {
  savedPaletteSection.innerHTML +=
    `<section class="saved-row">
    <figure class="mini-box" style="background-color: ${currentPalette.colors[0].hexCode}"></figure>
    <figure class="mini-box" style="background-color: ${currentPalette.colors[1].hexCode}"></figure>
    <figure class="mini-box" style="background-color: ${currentPalette.colors[2].hexCode}"></figure>
    <figure class="mini-box" style="background-color: ${currentPalette.colors[3].hexCode}"></figure>
    <figure class="mini-box" style="background-color: ${currentPalette.colors[4].hexCode}"></figure>
    <img class="trash-can" src = "assets/trash-can.png"></img></section>`
}

function deletePalette(event) {
  if (event.target.classList.contains("trash-can")) {
    event.target.closest("section").remove();
  }
}
