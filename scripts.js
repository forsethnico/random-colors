var newPalletBtn = document.querySelector('.new-palette-button');

var hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


newPalletBtn.addEventListener('click', randomColorPallet);

function randomColorPallet() {
  var hex = '#';
  for (var i = 0; i < 6; i++){
    hex += hexValues[(Math.floor(Math.random() * 16))];
  }
  return hex;
}
randomColorPallet();
