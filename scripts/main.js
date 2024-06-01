const body = document.body;
const sketchCellContainer = body.querySelector("#container")
//const sketchCell = document.createElement("div");
let sketchResolution = (16*16);
let isCanvasReady = false;
let userColor = "white";


function canvasLoop()
{
    if(!isCanvasReady)
        {
            createCanvas();
        }
    else
        {
            paintCell();
        }
    
}
function createCanvas()
{
    for(let i = 0; i < sketchResolution; i++)
        {
            let sketchCellTemp = document.createElement("div");
            //sketchCellTemp.style.outline
            sketchCellTemp.id ="cell";
            sketchCellTemp.addEventListener("click", (event) => {sketchCellTemp.style.backgroundColor = userColor});
            sketchCellContainer.appendChild(sketchCellTemp);
            
        }
        console.log("Canvas is ready!");
        isCanvasReady = true;
}

canvasLoop();