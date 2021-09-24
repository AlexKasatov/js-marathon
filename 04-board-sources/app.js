const board = document.getElementById('board')
// let colors = getRandomHexColor()
const SQUARES_NUMBER = 500

function getRandomHexColor () {
    return `#${(
        (Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")}`
        
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', (parameters) => {
        // console.log('ssss');
        setColor(square)
    })

    square.addEventListener('mouseleave', (parameters) => {
        removeColor(square)
    })


    board.append(square)
 }
 

 function setColor(e)  {
     
     e.style.background = `${getRandomHexColor ()}`
     e.style.boxShadow = `0 0 2px ${getRandomHexColor()}, 0 0 10px ${getRandomHexColor()}`
 }

 function removeColor(e) {
    e.style.background = '#1d1d1d'
    e.style.boxShadow = `0 0 2px #000`
 }

//  function getRandomColor() {
//     const index =  (Math.random() * colors)
//     return index
//  }

