const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");


canvas.width =  1024;
canvas.height = 576;
let pathSize=640;
let starting=false;
let stop = false;
let endBet=false;
let round=0;
let start=0;
let sono=0;
let totalApostadoNow=[0,0,0,0,0];
let betFeitos=[0,0,0,0,0];
let gameAnimate=[0,0];
let endGameDef=false;


let positionLines={
    x:193,
    y:100
}
let positionBackground={
    x:0,
    y:0
}

c.fillRect(0, 0, canvas.width, canvas.height);


function setZeroGold () {
    let buttonZero=document.querySelectorAll("#inputsGold input");
    for (let i=0;i<5;i++){
        buttonZero[i].valueAsNumber=0;
        buttonZero[i].value="0";
        buttonZero[i].hidden=false;
    }
    let buttonOne=document.querySelectorAll("#betsGold button");
    for (let i=0; i<5; i++){
        buttonOne[i].hidden=true;
    }
}

function updatePlayer() {
    let goldPlace=document.querySelector('#gold');
    let namePlace=document.querySelector('#nome');
    let tartaruguinha=document.querySelector('#tartaruguinha');
    namePlace.innerText=`${thePlayer.nomeJogador}`;
    goldPlace.innerText=`Gold ${thePlayer.goldPlayer}`;
    tartaruguinha.innerText=`${thePlayer.tartarugaAtual}`;
}

function updateNameTurtle() {
    let name1=document.querySelector('#turtle01');
    let name2=document.querySelector('#turtle02');
    let name3=document.querySelector('#turtle03');
    let name4=document.querySelector('#turtle04');
    let name5=document.querySelector('#turtle05');
    name1.innerText=`${turtle1.nameTurtle.nome}`;
    name2.innerText=`${turtle2.nameTurtle.nome}`;
    name3.innerText=`${turtle3.nameTurtle.nome}`;
    name4.innerText=`${turtle4.nameTurtle.nome}`;        
    name5.innerText=`${turtle5.nameTurtle.nome}`;
}

function somarGold (){
    let totalApostado=0;
    let buttonZero=document.querySelectorAll("#inputsGold input");
    
    for (let i=0; i<5; i++){
        if(buttonZero[i].valueAsNumber<0){buttonZero[i].valueAsNumber=0; buttonZero[i].value=0}
        console.log(buttonZero[i].valueAsNumber);
    }

    for (let i=0; i<5; i++){
        console.log(buttonZero[i].valueAsNumber);
        if(typeof thePlayer.goldPlayer.valueAsNumber !=="number"){ thePlayer.goldPlayer.valueAsNumber=1000}
        if(buttonZero[i].valueAsNumber!==totalApostadoNow[i]) {
            totalApostado+=(buttonZero[i].valueAsNumber-totalApostadoNow[i]);
            betFeitos[i]=buttonZero[i].valueAsNumber;
            console.log(`papanapapapapa ${totalApostado}`)
            thePlayer.goldPlayer-=totalApostado;
            totalApostadoNow[i]=buttonZero[i].valueAsNumber;
        }
    }
}
    
function totalDasApostas() {
    let totalApostado=0;
    let buttonZero=document.querySelectorAll("#inputsGold input")
    for (let i=0; i<5; i++){
        totalApostado+=buttonZero[i].valueAsNumber;
}
    return totalApostado;
}

function animarTartarugas() {
    window.requestAnimationFrame(animarTartarugas)
    c.fillStyle="black";
    if (stop){ return }
    drawingArena();
    updatePlayer();
    turtle1.update();
    turtle2.update();
    turtle3.update();
    turtle4.update();
    turtle5.update();
}

function playerBet (){
    window.requestAnimationFrame(playerBet);
    if (endBet) { return }
    updatePlayer();
    somarGold();
}

function pararGold (){
    let buttonZero=document.querySelectorAll("#inputsGold input");
    for (let i=0; i<5; i++){
        buttonZero[i].hidden=true;
    }

    let buttonOne=document.querySelectorAll("#betsGold button");
    for (let i=0; i<5; i++){
        buttonOne[i].hidden=false;
        buttonOne[i].textContent=buttonZero[i].value;
    }
}

function pagarGold() {
    let buttonOne=document.querySelectorAll("#betsGold button");
    let oddsFinais=document.querySelectorAll("#odds p");
    let goldAPagar=0;
    let winner=vencedora();
    goldAPagar+=Number(oddsFinais[winner.index].innerText)*betFeitos[winner.index];
    thePlayer.goldPlayer+=Math.ceil(goldAPagar);
}


function vencedora() {
    let winner={position: turtle1.position.x, index:0}
    if (winner.position<turtle2.position.x) {
        winner.position=turtle2.position.x; 
        winner.index=1
        }
    if (winner.position<turtle3.position.x) {winner.position=turtle3.position.x; winner.index=2}
    if (winner.position<turtle4.position.x) {winner.position=turtle4.position.x; winner.index=3}
    if (winner.position<turtle5.position.x) {winner.position=turtle5.position.x; winner.index=4}
    return winner;
}

function endGame() {
    console.log("ijaisjaisjiajsiaijsiaisjiasijaisj")
    if (thePlayer.goldPlayer>10000){
        document.getElementById("container").style.display="none";
        document.getElementById("losediv").style.display="none";
        document.getElementById("windiv").style.display="flex";
        endGameDef=true;    
    }
    if (thePlayer.goldPlayer<=0){
        document.getElementById("container").style.display="none";
        document.getElementById("windiv").style.display="none";
        document.getElementById("losediv").style.display="flex";
        endGameDef=true;    
    }
    
}


function continueJogo () {
    c.fillStyle="black";
    c.fillRect(0, 0, canvas.width, canvas.height);
    pagarGold();
    setZeroGold();
    updatePlayer();
    updateNameTurtle();
    drawingArena();
    endGame();
       
    turtle1.position.x=194;
    turtle1.conditions.tired=false;
    turtle1.conditions.bestificada=false;
    turtle1.velocidade.x=0.003
    
    turtle2.position.x=194;
    turtle2.conditions.tired=false;
    turtle2.conditions.bestificada=false;
    
    turtle3.position.x=194;
    turtle3.conditions.tired=false;
    turtle3.conditions.bestificada=false;
    
    turtle4.position.x=194;
    turtle4.conditions.tired=false;
    turtle4.conditions.bestificada=false;

    turtle5.position.x=194;
    turtle5.conditions.tired=false;
    turtle5.conditions.bestificada=false;

    totalApostadoNow=[0,0,0,0,0];
    betFeitos=[0,0,0,0,0];

    console.log(thePlayer.goldPlayer);
        
    turtle1.round=0;
    
    localStorage.setItem("gold",`${thePlayer.goldPlayer}`);
    
    if (endGameDef=false) {window.location.reload()}
    
    thePlayer.goldPlayer=Number(localStorage.getItem("gold"));
    
    return 
}

setZeroGold();
updateNameTurtle();
drawingArena();
turtle1.draw();
turtle2.draw();
turtle3.draw();
turtle4.draw();
turtle5.draw();

playerBet();

starteando2.hidden=true;

starteando.addEventListener("click",()=>{
    starteando.hidden=true;
    starteando.disabled=true;
    endBet=true;
    stop=false;
    pararGold();
    animarTartarugas()});

starteando2.addEventListener("click",()=>{
    starteando2.hidden=true;
    starteando2.disabled=true;
    starteando.disabled=false;
    endBet=false;
    starteando.hidden=false;
    continueJogo();
});