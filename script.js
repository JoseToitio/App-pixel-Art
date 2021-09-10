let paletteColors = document.querySelectorAll('.color');

function paletteColor () {
    for (let index = 0; index < paletteColors.length; index += 1) {
        switch (paletteColors[index].innerHTML) {
          case "Black":
            paletteColors[index].style.backgroundColor = 'black'
            paletteColors[index].innerHTML = "";
            break;
          case "Blue":
            paletteColors[index].style.backgroundColor = 'Blue'
            paletteColors[index].innerHTML = "";
            break;
          case "Purple":
            paletteColors[index].style.backgroundColor = 'purple'
            paletteColors[index].innerHTML = "";
            break;
          case "Red":
            paletteColors[index].style.backgroundColor = 'red'
            paletteColors[index].innerHTML = "";
            break;
        }
      }
}

function box(className) {
    let box = document.createElement("div");
    box.className = className;
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
createLine();
preencheLinha();
paletteColor();
