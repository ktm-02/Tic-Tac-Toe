const cells=document.querySelectorAll(".cell");
const turn=document.getElementById("turn");
const restart=document.getElementById("restart");

const winner=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let options=["", "", "", "", "", "", "", "", ""];
let player="X";
let running=false;

game();

function game(){
    cells.forEach(cell => cell.addEventListener("click",cellclick));
    restart.addEventListener("click",restartgame);
    turn.textContent=`${player} Turn`;
    running=true;
}

function cellclick(){
    const cellindex=this.getAttribute("cellindex");

    if(options[cellindex] != "" || !running){
        return;
    }
    update(this,cellindex);
    checkwinner();
}

function update(cell,index){
    options[index]=player;
    cell.textContent=player;
}

function change(){
    let o=document.createElement("span").innerHTML="O";
    player=(player=="X")?`${o}`:"X";
    turn.textContent=`${player} Turn`;
}

function checkwinner(){
    let win=false;

    for(let i=0;i<winner.length;i++){
        const condition=winner[i];
        const cellA=options[condition[0]];
        const cellB=options[condition[1]];
        const cellC=options[condition[2]];       

    if(cellA == "" || cellB =="" || cellC == ""){
        continue;
    }
    if(cellA == cellB && cellB == cellC){
        win=true;
        break;
    }
}
if(win){
    turn.textContent=`${player} Wins!`;
    running=false;
}
else if(!options.includes("")){
    turn.textContent="Draw!";
    running=false;
}
else{
    change();
}
}

function restartgame(){
    restart.addEventListener("click",()=>{
        location.reload();
    })
}
