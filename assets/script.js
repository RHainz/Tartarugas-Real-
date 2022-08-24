class Turtle {
    constructor ({position, velocidade, rndNumber, nameTurtle, resistencia, conditions}) {
        this.position = position;
        this.velocidade = velocidade;
        this.rndNumber = rndNumber;
        this.stop=false;
        this.nameTurtle=nameTurtle;
        this.resistencia=resistencia;
        this.conditions=conditions;
    }

    draw () {
        c.fillStyle="red";
        c.fillRect(this.position.x, this.position.y, 32, 32);
        c.fillStyle="white";
        c.fillText(`${this.position.x}`,this.position.x,this.position.y);
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
        round=round+1;
        
        console.log(start);
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
            this.velocidade.x=0;
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
    goldPlayer: 1000,
    tartarugaAtual: "Sem Tartaruga"    
};






    class Sprite {
        contructor({position, imgSource}) {
            this.position = position;
            this.width= 50;
            this.heigth= 100;
            this.image= new Image();
            this.image.src=imgSource;
        }

        draw(){
            c.drawImage(this.image, this.position.x, this.position.y);
        }

        update(){
            this.draw();
        }

}





    

// class DisplayJogador{
//     constructor ({nome}){
//         this.nome=nome;
//     }

//     ()
// }

const turtle1= new Turtle ({
    position: {
        x:194,
        y:108
    },
    velocidade: {
        x:0.003,
        y:0
    },
    rndNumber: {
        x:0,
        y:0
    },
    nameTurtle: {
        nome: "Rogeruga"
    },
    conditions: {
        tired:false,
        bestificada: false
    },
    resistencia: {
        stamina: 99950,
        foco: 4999
    }
});

console.log(turtle1);

const turtle2= new Turtle ({
    position: {
    x:194,
    y:156
    },
    velocidade: {
        x:0.009,
        y:0
    },
    rndNumber: {
        x:0,
        y:0
    },
    nameTurtle: {
        nome: "Marcoruga"
    },
    conditions: {
        tired:false,
        bestificada: false
    },
    resistencia: {
        stamina: 99960,
        foco: 99960
    }
});

function randomizer(tipo) {
    if (tipo=="res") {return ((Math.random()*100000+1))}
    else {
        return (Math.floor(Math.random()*100+1)/200*30)
    };
}



function drawingArena () {
    for (let i=0; i<=4; i++) {
        const ajuste=i*48;
        c.fillStyle="yellow";
        c.fillRect(positionLines.x, positionLines.y+ajuste, pathSize, 48);
        c.fillStyle="black";
        c.fillRect(positionLines.x+1, positionLines.y+ajuste+1, pathSize-2, 46);
    }

}
