const body = document.body;
const sketchCellContainer = body.querySelector("#container")
//const sketchCell = document.createElement("div");
let sketchResolution = (16*16);

function createCanvas()
{
    for(let i = 0; i < sketchResolution; i++)
        {
            let sketchCellTemp = document.createElement("div");
            //sketchCellTemp.style.outline
            sketchCellTemp.id ="cell";
            sketchCellContainer.appendChild(sketchCellTemp);
            
        }
}

createCanvas();