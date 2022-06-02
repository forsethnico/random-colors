var newPaletteBtn = document.querySelector('#new-palette-button');
var savePaletteBtn = document.querySelector('#save-palette-button')
var hexCode = document.querySelectorAll('#code')
var boxes = document.querySelectorAll('.box')
var lockIcon = document.querySelectorAll('.icon')

var currentPalette;
var savedPalettes = [];

window.addEventListener('load', createPalette);
newPaletteBtn.addEventListener('click', randomizePalette);
savePaletteBtn.addEventListener('click', savePalette);
lockIcon.forEach(function (img) {img.addEventListener('click', toggleLock)})

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
    this.colors[i].randomColor();
    //eventually add locked or unlocked property
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
  console.log(savedPalettes)
  createPalette();
}

function showPalette() {
  for (var i = 0; i < currentPalette.colors.length; i++) {
    hexCode[i].innerText = currentPalette.colors[i].hexCode
    boxes[i].style.backgroundColor = currentPalette.colors[i].hexCode
  }
}

function toggleLock(event) {
  if (event.target.src === 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/OOjs_UI_icon_lock.svg/768px-OOjs_UI_icon_lock.svg.png') {
    event.target.src = 'https://cdn-icons-png.flaticon.com/512/102/102288.png'
  } else {
    event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/OOjs_UI_icon_lock.svg/768px-OOjs_UI_icon_lock.svg.png'
  }
}
