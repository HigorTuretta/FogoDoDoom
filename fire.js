const firePixelArray = []
const fireWidth = 2
const fireHeight = 3

function start(){
    createFireDataStructure();
    renderFire();
}

function createFireDataStructure() { 
    const numberOfPixels = fireWidth * fireHeight
        for(let i = 0 ; i< numberOfPixels; i++){
            firePixelArray[i] = 0
        }
 }

 function calculateFirePropagation(){
   
 }

 function renderFire(){
    let html = '<table cellpadding=0 cellspacing=0>'
    for( let row = 0; row < fireHeight; row++){
        html += '<tr>'
        for (let column = 0; column < fireHeight; column++){
            const pixelIndex = column + (fireWidth * row)
            html += '<td>'
            html += pixelIndex
            html += '</td>'
        }
        html += '</tr>'
    }
    html += '</table>'
    document.getElementById('fireCanvas').innerHTML = html
 }

 start();