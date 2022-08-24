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

let positionLines={
    x:193,
    y:100
}
let positionBackground={
    x:0,
    y:0
}



const backGround= new Sprite({
    position: {
        x:0,
        y:0
    }, 
    imgSource: './images/Designsemnome.png'
});

c.fillRect(0, 0, canvas.width, canvas.height);


turtle1.draw();

turtle2.draw();

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
    //name3.innerText=`${turtle3.nameTurtle.nome}`;
    //name4.innerText=`${turtle4.nameTurtle.nome}`;        Ligar ao inserir o resto das Tartarugas
    //name5.innerText=`${turtle5.nameTurtle.nome}`;
}

function somarGold (){
    let totalApostado=0;
    let buttonZero=document.querySelectorAll("#inputsGold input");
    for (let i=0; i<5; i++){
        //console.log(buttonZero[i].valueAsNumber);
        //console.log(totalApostadoNow[i]);
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
    window.requestAnimationFrame(animarTartarugas);
    c.fillStyle="black";
    if (stop) { return }
    //c.fillRect(0,0,canvas.width,canvas.height);
    drawingArena();
    updatePlayer();
    //console.log(totalDasApostas());
//    backGround.update();
    turtle1.update();
    turtle2.update();
    //turtle3.update();
}

function playerBet (){
    //console.log(thePlayer.goldPlayer);
    //console.log("nomanete");
    if (endBet) { return }
    window.requestAnimationFrame(playerBet);
    //drawingArena();
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
    thePlayer.goldPlayer+=goldAPagar;    
}


function vencedora() {
    let winner={position: turtle1.position.x, index:0}
    if (winner.position<turtle2.position.x) {
        winner.position=turtle2.position.x; 
        winner.index=1
        }
    //if (winner.position<turtle3.position.x) {winner.position=turtle3.position.x; winner.index=2}
    //if (winner.position<turtle4.position.x) {winner.position=turtle4.position.x; winner.index=3}
    //if (winner.position<turtle5.potision.x) {winner.position=turtle5.position.x; winner.index=4}
    return winner;
}

function continueJogo () {
    //window.requestAnimationFrame(continueJogo);
    console.log(thePlayer.goldPlayer);
    c.fillStyle="black";
    c.fillRect(0, 0, canvas.width, canvas.height);
    
    pagarGold();
    setZeroGold();
    updatePlayer();
    updateNameTurtle();
    drawingArena();

    
    turtle1.position.x=194;
    turtle1.conditions.tired=false;
    turtle1.conditions.bestificada=false;
    turtle1.velocidade.x=0.003;
    turtle2.position.x=194;
    turtle2.conditions.tired=false;
    turtle2.conditions.bestificada=false;
    totalApostadoNow=[0,0,0,0,0];
    betFeitos=[0,0,0,0,0];

    // turtle1.velocidade.x=0.06;
    // turtle1=new Turtle({
    //     position: {
    //         x:194,
    //         y:108
    //     },
    //     velocidade: {
    //         x:+0.003,
    //         y:0
    //     },
    //     rndNumber: {
    //         x:0,
    //         y:0
    //     },
    //     nameTurtle: {
    //         nome: "Rogeruga"
    //     },
    //     conditions: {
    //         tired:false,
    //         bestificada: false
    //     },
    //     resistencia: {
    //         stamina: 99950,
    //         foco: 4999
    //     }
    // })
    console.log(turtle1);
    console.log(turtle2);
    console.log(thePlayer.goldPlayer);
    return playerBet();
}


setZeroGold();
updateNameTurtle();
drawingArena();
playerBet();
//animarTartarugas();



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

// setZeroGold();
// updateNameTurtle();
// console.log(turtle1.positionX());
// animarTartarugas();
// function areaPrincipal (inicio) {
//     while (starting===true){
//         animarTartarugas();
//     }
// }

// localizando=document.querySelectorAll("#inputsGold input")
// localizando[0].value="0";






















// let i=0; 
// for (let i=0; i<=4; i++) {
//     const ajuste=i*48;
//     console.log (ajuste*10000);
//     c.fillStyle="yellow";
//     c.fillRect(positionLines.x, positionLines.y+ajuste, pathSize, 48);
//     c.fillStyle="black";
//     c.fillRect(positionLines.x+1, positionLines.y+ajuste+1, pathSize-2, 46);
// }

// c.fillStyle="yellow"
// let nomeJogador=c.fillRect(100,400,50,60);
// c.fillText("Nome", 100,400,50,50);
// let posXturtle1=turtle1.positionX()
// c.fillText(`${(posXturtle1)}`,160,400,50,50);