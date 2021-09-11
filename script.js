
function box(className) {
    let box = document.createElement("div");
    box.classList = className;
    box.addEventListener('click', function (event){
        let colorSelected = document.querySelector('.selected');
        let color = colorSelected.style.backgroundColor;
        let pixel = event.target;
        pixel.style.backgroundColor = color;
        console.log('cliquei')
    })
    return box;
  }
function createLine (divLine) {
    let numberLines = 5;
    let boxDiv = document.querySelector('#pixel-board');
    for (let index = 0; index < numberLines; index +=1){
        let lines = document.createElement('div');
        boxDiv.appendChild(lines)
        lines.className = 'line'   
    }
}
function preencheLinha () {
    let getLine = document.querySelectorAll('.line')
    for (let index = 0; index < getLine.length; index += 1){
        for(let i = 0; i < getLine.length; i += 1){
            let createBox = box('pixel');       
            getLine[index].appendChild(createBox);
        }
    }
}

function changeColor (event){
    let color = document.querySelector('.selected')
    color.classList.remove('selected');
    event.target.classList.add('selected');
    console.log('cliquei')
}


let buttom = document.querySelector('#clear-board');
buttom.addEventListener('click', function () {
    let pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      const pixelColor = pixels[index];
      pixelColor.style.backgroundColor = 'white';
    }
  })


function randomColors() {
  const blackColor = ['black'];
  for (let index = 0; index < 3; index += 1) {
    let num = Math.floor(Math.random() * 16777215);
    num = num.toString(16);
    blackColor.push(`#${num}`);
  }
  return blackColor;
}

function divsColor (colorsList) {
  const colorDiv = document.querySelector('#color-palette');

  colorsList.forEach((color) => {
    const colorElement = document.createElement('div');
    colorElement.classList.add('color');
    colorElement.style.backgroundColor = color;
    if (color === 'black') colorElement.classList.add('selected');
    colorElement.addEventListener('click', changeColor);
    colorDiv.appendChild(colorElement);
  });

}










divsColor(randomColors());
createLine();
preencheLinha();

