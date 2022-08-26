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
        attBackgroud("./images/tt1gif.gif",this.position.x,this.position.y);
    }

    resistenciaTeste () {
        this.rndNumber=randomizer("res");
        if (this.rndNumber>this.resistencia.stamina && !this.conditions.bestificada ) {
            return this.conditions.tired="true";            
        }
    }

    update () {
        this.draw();
        this.resistenciaTeste();
        this.rndNumber=randomizer("");
                
        this.round++;
        
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
            chariotAudio.pause();
            crowdAudio.play();
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
    goldPlayer: 1000,
    tartarugaAtual: "Sem Tartaruga"    
};

// function randomizer(tipo) {
//     if (tipo==="res") {return ((Math.random()*100000+1))}
//     else {
//         return (Math.floor(Math.random()*100+1)/200*vel)
//     };
// }

function drawingArena () {
    attBackgroud("./images/Sandy5.gif",0,70);
    c.beginPath();
    c.moveTo(840,90);
    c.lineTo(840,350);
    c.stroke();
}

const allturtles=[  {position: {x:194,y:90}, velocidade: {x:0.003,y:0}, rndNumber: {x:0,y:0}, nameTurtle: {nome: "Ironruga"}, 
                    conditions: {tired:false, bestificada: false}, resistencia: {stamina: 99950, foco: 99950}},

                    {position: {x:194,y:138}, velocidade: {x:0.006,y:0}, rndNumber: {x:0,y:0}, nameTurtle: {nome: "Rogerin uga"}, 
                    conditions: {tired:false, bestificada: false}, resistencia: {stamina: 99960, foco: 99960}},

                    {position: {x:194,y:186}, velocidade: {x:0.009,y:0}, rndNumber: {x:0,y:0}, nameTurtle: {nome: "DaVinte"}, 
                    conditions: {tired:false, bestificada: false}, resistencia: {stamina: 99955, foco: 99960}},
                
                    {position: {x:194,y:234}, velocidade: {x:0.007,y:0}, rndNumber: {x:0,y:0}, nameTurtle: {nome: "Yakiruga"}, 
                    conditions: {tired:false, bestificada: false}, resistencia: {stamina: 99965, foco: 99960}},
                
                    {position: {x:194,y:282}, velocidade: {x:0.010,y:0}, rndNumber: {x:0,y:0}, nameTurtle: {nome: "Ziggyruga"}, 
                    conditions: {tired:false, bestificada: false}, resistencia: {stamina: 99945, foco: 99960}}]



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
                
    }

    update(){
        console.log(this.position)
        this.draw();
        
    }

}
