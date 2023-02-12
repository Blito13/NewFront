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
var winner =/*  await getFinalNumber(); */[7,1,9,3,0]
var coeficent = 0;
var sum = 0;
var dataPayment = {};
var collection = [];
var idx = 3;
var index = 1;
var count_acerts = 1;
var sumFirstLine = 0;
var sumSecondLine = 0;
var sumThirdLine = 0;
var sumFourthLine = 0;
var sumFifthLine = 0; 


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
      /* sumFirstLine += e.bet; */
        boolean = true
    }else if(i === index +1 && e === winner[idx-1]){
        /* sumSecondLine += e.bet */
       boolean2 =  true
    } 
    else if(i === index +2 && e === winner[idx-2] ){
      /* sumThirdLine += e.bet; */
       boolean3 =  true
     }
    else if(i === index +3 && e === winner[idx-3] ){
       /*  sumFourthLine += e.bet */
        boolean4 =  true
     }
    else return
    })
   sumFirstLine +=e.bet
   boolean === true ? (e.acerts = e.acerts +1 ) && (sumSecondLine +=e.bet) : null;
   boolean2 === true && e.acerts>1 ? (e.acerts = e.acerts +1) && (sumThirdLine += e.bet) : null;
   boolean3 === true  && e.acerts>2 ?(e.acerts = e.acerts +1) &&(sumFourthLine += e.bet) : null;
   boolean4 === true && e.acerts>3 ? (e.acerts = e.acerts +1)&&(sumFifthLine += e.bet) : null;
   
   
e.numbers.reverse();
 
})

                                        

console.log(collection,"acaadasdasdasdasd")
return {collection , sumFirstLine , sumSecondLine ,sumThirdLine , sumFourthLine , sumFifthLine } 
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
var newArr =  (await getMatches()).collection;
var total = await getTotal();
var amount_figure = await getAmountByDigits(total);
console.log(newArr , "here 174")
var coeFirstLine = amount_figure/(await getMatches()).sumFirstLine;
var coeSecondLine = amount_figure/(await getMatches()).sumSecondLine;
var coeThirdLine = amount_figure/(await getMatches()).sumThirdLine;
var coeFourthLine = amount_figure/(await getMatches()).sumFourthLine;
var coeFifthLine = amount_figure/(await getMatches()).sumFifthLine; 

console.log(coeFirstLine , coeSecondLine , coeThirdLine , coeFourthLine ,coeFifthLine, "despierta")
/* e["paymentOneLine"] = (amount_figure/ e.first) *e.bet
e["paymentTwoLine"] = (amount_figure/ e.second) *e.bet
e["paymentThirdLine"] = (amount_figure/ e.third) *e.bet
e["paymentFourthLine"] = (amount_figure/ e.fourth) *e.bet
e["paymentFifthLine"] = (amount_figure/ e.fifth) *e.bet */
newArr.map(e => {
    e.acerts===5?e['pay-line-5'] = ( coeFifthLine + coeSecondLine + coeThirdLine +coeFourthLine + coeFifthLine) * e.bet:
    e.acerts === 1? e['pay-first-line'] = e.bet * coeFifthLine:
    e.acerts===2?e['pay-line-2'] = ( coeFifthLine + coeSecondLine) * e.bet:
    e.acerts===3?e['pay-line-3'] = ( coeFifthLine + coeSecondLine + coeThirdLine) * e.bet:
    e.acerts===4?e['pay-line-4'] = ( coeFifthLine + coeSecondLine + coeThirdLine + coeFourthLine) * e.bet:
    e['pay'] = "aca tiene q decolver lo reacudado"
    
    
})
console.log(newArr)
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