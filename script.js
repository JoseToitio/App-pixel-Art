let paletteColors = document.querySelectorAll('.color');
let colorBlack = document.querySelector('#black');
let colorBlue = document.querySelector('#blue');
let colorPurple = document.querySelector('#purple');
let colorRed = document.querySelector('#red');
function paletteColor () {
    for (let index = 0; index < paletteColors.length; index += 1) {
        switch (paletteColors[index].innerHTML) {
          case "Black":
            paletteColors[index].style.backgroundColor = 'black'
            paletteColors[index].style.color = 'black'
            break;
          case "Blue":
            paletteColors[index].style.backgroundColor = 'Blue'
            paletteColors[index].style.color = 'blue'
            break;
          case "Purple":
            paletteColors[index].style.backgroundColor = 'purple'
            paletteColors[index].style.color = 'purple'
            break;
          case "Red":
            paletteColors[index].style.backgroundColor = 'red'
            paletteColors[index].style.color = 'red'
            break;
        }
      }
}

function box(className) {
    let box = document.createElement("div");
    box.classList = className;
    box.addEventListener('click', function (){
        let color = document.querySelector('.selected');
        box.style.background = color.innerHTML
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
colorBlack.addEventListener('click', changeColor);
colorBlue.addEventListener('click', changeColor);
colorPurple.addEventListener('click', changeColor);
colorRed.addEventListener('click', changeColor);

let buttom = document.querySelector('#clear-board');
buttom.addEventListener('click', function () {
    let pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      const pixelColor = pixels[index];
      pixelColor.style.backgroundColor = 'white';
    }
  })
















createLine();
preencheLinha();
paletteColor();
