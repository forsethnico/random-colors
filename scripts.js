var newPaletteBtn = document.querySelector('#new-palette-button');

var hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

var color = document.querySelectorAll(".box")

newPaletteBtn.addEventListener('click', setPalette);

function randomColor() {
  var hex = '#';
  for (var i = 0; i < 6; i++){
    hex += hexValues[(Math.floor(Math.random() * 16))];
  } console.log(event)
  return hex;
}

function setPalette() {
  var hex = randomColor();
  color.style.backgroundColor = hex;
  color.innerHTML = `<p>${hex}</p>`
  console.log('hello')
}

