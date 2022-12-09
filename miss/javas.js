const players = [{
    apuesta : 50,
    numero : 37580,  
},{
    apuesta : 80,
    numero : 44348,  
},{
    apuesta : 65,
    numero : 71930,  
},{
    apuesta : 45,
    numero : 10211,  
},{
    apuesta : 95,
    numero : 55666,  
},{
    apuesta : 55,
    numero : 60414,  
},{
    apuesta : 60,
    numero : 29730,  
},{
    apuesta : 40,
    numero : 65930,  
},{
    apuesta : 85,
    numero : 88334,  
},{
    apuesta : 70,
    numero : 00330,
},{
    apuesta : 75,
    numero : 99827,  
},{
    apuesta : 90,
    numero : 83615,  
},{
    apuesta : 83,
    numero : 20618,  
},{
    apuesta : 68,
    numero : 01234,  
},{
    apuesta : 74,
    numero : 81112,  
},{
    apuesta : 89,
    numero : 69239,  
},{
    apuesta : 66,
    numero : 38593,  
},{
    apuesta : 59,
    numero : 73191,  
},{
    apuesta : 72,
    numero : 94955,  
},{
    apuesta : 80,
    numero : 11129,  
},]
//Obtener total apostado
const getTotal = (players) => {
 var total = 0 ;
 players.forEach(element => {
 total += element.apuesta
})
    return total
} 
//La mitad del total dividido en 5 (cada cifra)
const getAmountByFigure = () => {
const total =  getTotal(players)
var half = total / 2;
var amount_figure = half / 5 ;
return amount_figure
}

const getMatch = () => {
    players.forEach(e  => {
        console.log(Object.values(e.numero))
    })
}

 getMatch();