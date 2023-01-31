/* require('dotenv').config(); 
const axios = require ('axios');
const { types } = require('pg');
const {Recipe , Diet , Step} = require ('../db')
const {YOUR_API_KEY} = process.env;
 */
const players = require('../mock/Players');
console.log(players.map(e =>e ) ,"this")
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
var getTotal = async () => {
    console.log(players ,"here")
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
  
    console.log(players , "pix")
 const  numbersArray = players.map((e,i) => {
    let numStart = Array.from(e.numero.padStart(5, "*"))
    let toInt = numStart.map(e => e = Number(e))
  return{
    bet : e.apuesta,
    numbers : toInt,
    id : i
  } 
 })

    console.log(numbersArray ,"prix")
return numbersArray
}
const getMatches = async function  ()  {
var players = await getPlayers();
var newArr = await padstart();    
var total = await getTotal();
var amount_figure = await getAmountByDigits(total);
var winner =/*  await getFinalNumber(); */[4,7,3,3,0]
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
        boolean = true
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
boolean2 === true && e.acerts>1 ? e.acerts = e.acerts +1 : null;
boolean3 === true  && e.acerts>2 ?e.acerts = e.acerts +1 : null;
boolean4 === true && e.acerts>3 ? e.acerts = e.acerts +1 : null;
e.numbers.reverse();
 
})
console.log(collection)
return collection
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
const payMatches = async function ( )  {
//validar las cifras sin ganadores para acumular lo apostado para la proxima jugada
//PORCENTAJE : AMOUNT_FIGURE / TOTAL DE LAS APUESTAS ganadoras A ESA CIFRA(1,2,3,4,5)
// RESULTADO DE LA PAGA = PORCENTAJE X CADA APUESTA
var newArr = await getMatches();
var total = await getTotal();
var amount_figure = await getAmountByDigits(total);

var sumFirstLine = 0;
var sumSecondLine = 0;
var sumThirdLine = 0;
var sumFourthLine = 0;
var sumFifthLine = 0; 

newArr.map((e) => {
    e.acerts===1 ? sumFirstLine += e.bet : 
    e.acerts===2 ? sumSecondLine += e.bet :
    e.acerts===3 ? sumThirdLine += e.bet :
    e.acerts===4 ? sumFourthLine += e.bet :
    e.acerts===5 ? sumFifthLine += e.bet: "nothing";
})


return console.log(sumFirstLine ,"1", sumSecondLine ,"2", sumThirdLine ,"3", sumFourthLine ,"4", sumFifthLine ,"5")
}
module.exports = {
    getPlayers
} 
getMatches()
    .then(payMatches);
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