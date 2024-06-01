const body = document.body;
const sketchCellContainer = body.querySelector("#container")
//const sketchCell = document.createElement("div");
let sketchResolution = (16*16);
let isCanvasReady = false;
let userColor = "white";

//Setup UI for this.
function getUserColor()
{
    userColor = "red";
}

//Make this a nice UI, this is kind of poop.
function gatherCanvasInfo()
{
    sketchResolution = prompt("Canvas Size?")
    
    if(sketchResolution > 64 || sketchResolution <= 0 || isNaN(sketchResolution))
        {
            prompt("Sorry! Try again")
            gatherCanvasInfo()
        }

    sketchResolution = (sketchResolution*sketchResolution)
}

function createCanvas()
{
    for(let i = 0; i < sketchResolution; i++)
        {
            let sketchCellTemp = document.createElement("div");
            sketchCellTemp.id ="cell";
            sketchCellTemp.addEventListener("click", (event) => {sketchCellTemp.style.backgroundColor = userColor});
            sketchCellContainer.appendChild(sketchCellTemp);
        }
        console.log("Canvas is ready!");
        isCanvasReady = true;
}

function resetCanvas()
{
    for(let i = 0; i < sketchResolution; i++)
    {
        //No error check if child is null. Should fix.
        sketchCellContainer.removeChild(sketchCellTemp);
    }
    isCanvasReady = false;
}

function canvasLoop()
{
    if(!isCanvasReady)
        {
            gatherCanvasInfo();
            createCanvas();
        }
}

canvasLoop();