class Turtle {
    constructor ({position, velocidade, rndNumber, nameTurtle, resistencia, conditions}) {
        this.position = position;
        this.velocidade = velocidade;
        this.rndNumber = rndNumber;
        this.stop=false;
        this.nameTurtle=nameTurtle;
        this.resistencia=resistencia;
        this.conditions=conditions;
        this.round=0;
        
    }

    draw () {
        const r=0;
        //c.fillStyle="red";
        //c.fillRect(this.position.x, this.position.y, 32, 32);
        //c.fillStyle="white";
        //c.fillText(`${this.position.x}`,this.position.x,this.position.y);
        attBackgroud("./images/tt1gif.gif",this.position.x,this.position.y);
        //attGif("./images/tt1gif.gif",this.position.x,this.position.y);
        //console.log(this.position.x,this.position.y)
    }

    resistenciaTeste () {
        this.rndNumber=randomizer("res");
        //console.log(`${this.rndNumber} mamamamamamaqiieuwiueiwueiuw`);
        if (this.rndNumber>this.resistencia.stamina && !this.conditions.bestificada ) {
            return this.conditions.tired="true";            
        }
    }

    update () {
        this.draw();
        this.resistenciaTeste();
        this.rndNumber=randomizer("");
        //console.log(this.rndNumber);
        
        this.round++;
        
        //console.log(this.conditions.bestificada);
        if(this.conditions.tired){
            this.velocidade.x=0;
            start=start+1;
            if (start>100){
                sono ++;
                start=0;
                this.conditions.tired=false;
                
            }
        }else{ 
        this.position.x +=this.velocidade.x+this.rndNumber;
        if (this.position.x >=(pathSize+192)) {
            console.log("vencedora");
            console.log(sono);
            starteando2.hidden=false;
            starteando2.disabled=false;
            this.position.x-=this.rndNumber;
            return stop=true;
        }
    }
    }

    reset () {
        this.position.x=194;
    }

    positionX() {
        return this.position.x;
    }
}

let thePlayer={
    nomeJogador: "The Player",
    goldPlayer: 9500,
    tartarugaAtual: "Sem Tartaruga"    
};
    //localStorage.setItem("gold",`${thePlayer.goldPlayer}`);

function randomizer(tipo) {
    if (tipo==="res") {return ((Math.random()*100000+1))}
    else {
        return (Math.floor(Math.random()*100+1)/200*5)
    };
}

function drawingArena () {
    attBackgroud("./images/Sandy5.gif",0,70);
    c.beginPath();
    c.moveTo(840,90);
    c.lineTo(840,350);
    c.stroke();
    //c.fillRect(180,90,710,300);
    // for (let i=0; i<=4; i++) {
    //     const ajuste=i*48;
    //     c.fillStyle="yellow";
    //     c.fillRect(positionLines.x, positionLines.y+ajuste, pathSize, 48);
    //     c.fillStyle="black";
    //     c.fillRect(positionLines.x+1, positionLines.y+ajuste+1, pathSize-2, 46);
    // }

}

const allturtles=[  {position: {x:194,y:90}, velocidade: {x:0.003,y:0}, rndNumber: {x:0,y:0}, nameTurtle: {nome: "Rogeruga"}, 
                    conditions: {tired:false, bestificada: false}, resistencia: {stamina: 99950, foco: 99950}},

                    {position: {x:194,y:138}, velocidade: {x:0.006,y:0}, rndNumber: {x:0,y:0}, nameTurtle: {nome: "Marcoruga"}, 
                    conditions: {tired:false, bestificada: false}, resistencia: {stamina: 99960, foco: 99960}},

                    {position: {x:194,y:186}, velocidade: {x:0.009,y:0}, rndNumber: {x:0,y:0}, nameTurtle: {nome: "Tartar Uga"}, 
                    conditions: {tired:false, bestificada: false}, resistencia: {stamina: 99960, foco: 99960}},
                
                    {position: {x:194,y:234}, velocidade: {x:0.007,y:0}, rndNumber: {x:0,y:0}, nameTurtle: {nome: "Saporuga"}, 
                    conditions: {tired:false, bestificada: false}, resistencia: {stamina: 99960, foco: 99960}},
                
                    {position: {x:194,y:282}, velocidade: {x:0.010,y:0}, rndNumber: {x:0,y:0}, nameTurtle: {nome: "Demonhuga"}, 
                    conditions: {tired:false, bestificada: false}, resistencia: {stamina: 99960, foco: 99960}}]



const turtle1= new Turtle (allturtles[0]);
const turtle2= new Turtle (allturtles[1]);
const turtle3= new Turtle (allturtles[2]);
const turtle4= new Turtle (allturtles[3]);
const turtle5= new Turtle (allturtles[4]);

class Sprite {
    contructor({position2, imgSource}) {
        this.position = position2;
        this.width= 50;
        this.height= 100;
        this.image= new Image();
        this.image.src =imgSource;
    }
    
    draw(){
        const image=new Image(50,100);
        image.src="./images/largeturtle.png";
        c.drawImage(image, 0, 0, 500, 1000);
        //image.onload = ()=>{
        //
        //}
        
    }

    update(){
        console.log(this.position)
        this.draw();
        
    }

}

// class DisplayJogador{
//     constructor ({nome}){
//         this.nome=nome;
//     }

//     ()
// }

// const turtle1= new Turtle ({
//     position: {
//         x:194,
//         y:108
//     },
//     velocidade: {
//         x:0.003,
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
// });

// console.log(turtle1);

// const turtle2= new Turtle ({
//     position: {
//     x:194,
//     y:156
//     },
//     velocidade: {
//         x:0.009,
//         y:0
//     },
//     rndNumber: {
//         x:0,
//         y:0
//     },
//     nameTurtle: {
//         nome: "Marcoruga"
//     },
//     conditions: {
//         tired:false,
//         bestificada: false
//     },
//     resistencia: {
//         stamina: 99960,
//         foco: 99960
//     }
// });