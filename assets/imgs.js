

function attBackgroud(sourceImg,posX,posY) {
    const image = new Image(); 
    const sourceImg2=sourceImg;
    let posX2=posX;
    let posY2=posY;

    image.onload = drawImageActualSize; 
    image.src = sourceImg2;


    function drawImageActualSize() {
    
    c.drawImage(this, posX2, posY2);

    
  }
}

