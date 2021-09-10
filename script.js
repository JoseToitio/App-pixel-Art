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
paletteColor();

