var newPaletteBtn = document.querySelector('#new-palette-button');
var hexCode = document.querySelectorAll('#code')
var boxes = document.querySelectorAll('.box')

var hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

window.addEventListener('load', setPalette);
newPaletteBtn.addEventListener('click', setPalette);

class Color {
  constructor() {
    this.locked = false;
    this.hexCode = hexCode;
  }
}

class Palette {
  constructor() {
    this.paletteLength = [];
    this.id = Date.now();
  }
}


function randomColor() {
  var hex = '#';
  for (var i = 0; i < 6; i++){
    hex += hexValues[(Math.floor(Math.random() * 16))];
  }
  return hex;
}

function setPalette() {
  for (var i = 0; i < 5; i++){
    hexCode[i].innerText = randomColor()
    boxes[i].style.backgroundColor = hexCode[i].innerText
    console.log(boxes)
  }
}
