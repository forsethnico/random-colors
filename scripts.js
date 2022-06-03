var newPaletteBtn = document.querySelector('#new-palette-button');
var savePaletteBtn = document.querySelector('#save-palette-button')
var hexCode = document.querySelectorAll('#code')
var boxes = document.querySelectorAll('.box')
var lockIcon = document.querySelectorAll('.icon')
var savedPaletteSection = document.querySelector(".saved-palettes")

var currentPalette;
var savedPalettes = [];

window.addEventListener('load', createPalette);
newPaletteBtn.addEventListener('click', randomizePalette);
savePaletteBtn.addEventListener('click', savePalette);
lockIcon.forEach(function (img) {img.addEventListener('click', toggleLockIcon)})

class Color {
  constructor() {
    this.locked = false;
    this.hexCode = '';
    this.randomColor();
  }
  randomColor() {
    var hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    var hex = '#';
    for (var i = 0; i < 6; i++){
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
  savedPalettes.push(currentPalette);   //<---- Include a lock icon img change
  createPalette();
  showSavedPalette()
}

function showPalette() {
  for (var i = 0; i < currentPalette.colors.length; i++) {
    hexCode[i].innerText = currentPalette.colors[i].hexCode
    boxes[i].style.backgroundColor = currentPalette.colors[i].hexCode
  }
}

// can aquire hexcode of targeted lock icon click
// compare aquired hexcode to the hexcodes(property) of all Colors(object) in the currentPalette(object)



function toggleLockIcon(event) {
  if (event.target.src === 'https://cdn-icons-png.flaticon.com/512/102/102288.png') {
    event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/OOjs_UI_icon_lock.svg/768px-OOjs_UI_icon_lock.svg.png'
    var targetHex = event.target.closest('figure').innerText
    for (var i = 0; i < 5; i++) {
      if (currentPalette.colors[i].hexCode === targetHex) {
        currentPalette.colors[i].locked = true
      }
    }
  } else {
    event.target.src = 'https://cdn-icons-png.flaticon.com/512/102/102288.png'
    var targetHex = event.target.closest('figure').innerText
    for (var i = 0; i < 5; i++) {
      if (currentPalette.colors[i].hexCode === targetHex) {
        currentPalette.colors[i].locked = false
      }
    }
  }
}
function showSavedPalette() {
// var displaySaved = savedPaletteSection.innerHTML
  for(var i = 0; i < savedPalettes.length; i++){
  savedPaletteSection.innerHTML +=
  `<figure class="mini-box">${savedPalettes[i]}</figure>
<figure class="mini-box">${savedPalettes[i]}</figure>
<figure class="mini-box">${savedPalettes[i]}</figure>
<figure class="mini-box">${savedPalettes[i]}</figure>
<figure class="mini-box">${savedPalettes[i]}</figure>`
}
}
