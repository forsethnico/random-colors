var newPaletteBtn = document.querySelector('#new-palette-button');
var code = document.querySelectorAll('#code')
var boxes = document.querySelectorAll('.box')


var hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

var color = document.querySelectorAll(".box")

newPaletteBtn.addEventListener('click', setPalette);

function randomColor() {
  var hex = '#';
  for (var i = 0; i < 6; i++){
    hex += hexValues[(Math.floor(Math.random() * 16))];
  }
  return hex;
}

function setPalette() {
  for (var i = 0; i < 5; i++){
    code[i].innerText = randomColor()
    boxes[i].style.backgroundColor = code[i].innerText
    console.log(boxes)
  }
}
setPalette()
