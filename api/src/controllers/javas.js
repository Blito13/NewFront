/* require('dotenv').config(); 
const axios = require ('axios');
const { types } = require('pg');
const {Recipe , Diet , Step} = require ('../db')
const {YOUR_API_KEY} = process.env;

const players = require('../models/Players');
console.log(players) */
const players = [{
    apuesta : 50,
    numero : "37580",  
},{
    apuesta : 80,
    numero : "44348",  
},{
    apuesta : 65,
    numero : "71930",  
},{
    apuesta : 45,
    numero : "10211",  
},{
    apuesta : 95,
    numero : "55666",  
},{
    apuesta : 55,
    numero : "60414",  
},{
    apuesta : 60,
    numero : "29730",  
},{
    apuesta : 40,
    numero : "65930",  
},{
    apuesta : 85,
    numero : "83342",  
},{
    apuesta : 70,
    numero : "330",
},{
    apuesta : 75,
    numero : "99827",  
},{
    apuesta : 90,
    numero : "83615",  
},{
    apuesta : 83,
    numero : "20618",  
},{
    apuesta : 68,
    numero : "01234",  
},{
    apuesta : 74,
    numero : "81112",  
},{
    apuesta : 89,
    numero : "69239",  
},{
    apuesta : 66,
    numero : "38593",  
},{
    apuesta : 59,
    numero : "73191",  
},{
    apuesta : 72,
    numero : "94955",  
},{
    apuesta : 80,
    numero : "11129",  
},]
const getPlayers = async () =>{
    return players
}
const getDB = async () =>{ 

    return await Player.findAll({  
        include: { 
            model: Diet, 
            attributes: ['name'],
            through: {
                attributes: [],   
            }
        },
       
    })}
var getTotal = async (players) => {
    console.log(players)
     var total = 0 ;

     players.forEach(element => {
     total += element.apuesta
 })
 console.log(total)


return total
}
//La mitad del total dividido en 5 (cada cifra)
var getAmountByDigits = async (datos) =>  {

    
   var half = datos / 2;
   var amount_figure  =  half / 5 ;
   console.log(datos , amount_figure)
   return amount_figure



}

const getFinalNumber = async () => {
  
//falta padStart
        var numberSelected = [];
        var max = 9;
        var min = 0; 
        for(let i = 0 ; i< 5 ; i++){
            let random = parseInt(Math.random() * (max - min) + min);
           numberSelected = [...numberSelected , random]
        }
     console.log(numberSelected);
     


    return numberSelected;
}
const padstart = async () => {
 const  numbersArray = players.map((e,i) => {
    let numStart = Array.from(e.numero.padStart(5, "*"))
    let toInt = numStart.map(e => e = Number(e))
  return{
    bet : e.apuesta,
    numbers : toInt,
    id : i
  } 
 })

    console.log(numbersArray)
return numbersArray
}
const getMatches = async function  ()  {
    
var newArr = await padstart();    
var total = await getTotal(players);
var amount_figure = await getAmountByDigits(total);
var winner =/*  await getFinalNumber(); */[4,4,3,3,0]
var coeficent = 0;
var sum = 0;
var dataPayment = {};
var collection = [];
var idx = 3;

var index = 1;

var count_acerts = 1;
collection =newArr.filter (e => e.numbers[4] === winner[4])
collection.map(e  => e['acerts'] =1 )
collection?.map( (e , i)=>{ 
   
    var boolean = false;
    var boolean2 = false;
    var boolean3 = false;
    var boolean4 = false;

    sum = sum + e.bet
 
   e.numbers.reverse().map((e , i) => {
    
       if(i === index && e === winner[idx]){
        boolean =true
    }else if(i === index +1 && e === winner[idx-1]){
       boolean2 =  true
    } 
    else if(i === index +2 && e === winner[idx-2] ){
      
       boolean3 =  true
     }
    else if(i === index +3 && e === winner[idx-3] ){

        boolean4 =  true
     }
    else return
    })
boolean === true ? e.acerts = e.acerts +1 : null;
boolean2 === true && e.acerts>1 ? e.acerts = e.acerts +1  : null;
boolean3 === true  && e.acerts>2 ?e.acerts = e.acerts +1 : null;
boolean4 === true && e.acerts>3 ? e.acerts = e.acerts +1 : null;
e.numbers.reverse();
 
})

return console.log("este es el numero ganador ", winner , "estas son las jugadas con sus aciertos" , collection)
}
const postRecipe = async (req , res) =>{
    
    const { name, summary, score, healthScore, steps, diets, image, createdINBd } = req.body;

    const recipeCreated = await Recipe.create({                
        name,
        summary,
        score,
        healthScore,
        steps,   
        image,
        createdINBd 
    });
    const typesDb = await Diet.findAll({where: {name: diets}}) 
    console.log(recipeCreated)
    recipeCreated.addDiet(typesDb)
    /* recipeCreated.addStep(steps) */
    res.send('Recipe created successfully')

}
const payMatches = async function (lines , )  {
//validar las cifras sin ganadores para acumular lo apostado para la proxima jugada
//PORCENTAJE : AMOUNT_FIGURE / TOTAL DE LAS APUESTAS ganadoras A ESA CIFRA(1,2,3,4,5)
// RESULTADO DE LA PAGA = PORCENTAJE X CADA APUESTA
var coeficent= 0;
var collection  = 0;
var arregloX = [];
var total = await getTotal(players);
var amount_figure = await getAmountByDigits(total);
console.log(lines,"acaman")
/* lines.oneLine.map(e=> {
    collection += e.bet;
}) */
/* totalPay = lines.oneLine.map(e => {
    coeficent = amount_figure/collection;
    return {
      pay :  coeficent *e.bet,
      bet : e.bet,
      number : e.numbers,
      id : e.id,
      coeficent : coeficent
    }
}) */
/* for(let c in lines){

  lines[c].map(e =>  {
    arregloX = [...arregloX , {
        pay :e.bet
    }]
        
    })
}   */                               
console.log( lines )
}
/* module.exports = {
    getPlayers
}  */
getMatches();
/* getTotal(players)
.then(getAmountByDigits)
.then(getFinalNumber)
.then(padstart)
.then(getMatches)
.then(payMatches) */
/* .then( result => getAmountByDigits(result))
.then( result => console.log(result)) */

/* Promise.all([getAmountByDigits() , getFinalNumber(), getTotal(players)] , getMatches(getFinalNumber)) .then(response => {
    console.log(response)
}) */