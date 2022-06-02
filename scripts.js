var newPaletteBtn = document.querySelector('#new-palette-button');
var hexCode = document.querySelectorAll('#code')
var boxes = document.querySelectorAll('.box')
var palette = null;

var hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

window.addEventListener('load', createPalette);
newPaletteBtn.addEventListener('click', randomizePalette);

class Color {
  constructor() {
    this.locked = false;
    this.hexCode = '';
    this.randomColor();
  }
  randomColor() {
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
  palette = new Palette();
  showPalette();
}

function randomizePalette() {
  palette.randomizeColors();
  showPalette();
}

function showPalette() {
  for (var i = 0; i < palette.colors.length; i++) {
    hexCode[i].innerText = palette.colors[i].hexCode
    boxes[i].style.backgroundColor = palette.colors[i].hexCode
  }
}
