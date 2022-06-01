var newPalletBtn = document.querySelector('.new-palette-button');
var boxes = document.querySelector('.color-boxes')

var hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


newPalletBtn.addEventListener('click', changeColors);
boxes.addEventListener('click', changeColors)

function randomColorPallet() {
  var hex = '#';
  for (var i = 0; i < 6; i++){
    hex += hexValues[(Math.floor(Math.random() * 16))];
  } console.log(event)
  return hex;
}
 function changeColors(){
   console.log('Hello')
 }
