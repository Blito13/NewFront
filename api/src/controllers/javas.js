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
/* const getDB = async () =>{ 

    return await Player.findAll({  
        include: { 
            model: Diet, 
            attributes: ['name'],
            through: {
                attributes: [],   
            }
        },
       
    })} */
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

//clear array
collection =newArr.filter (e => e.numbers[4] === winner[4])
collection.map(e  => e['acerts'] =1 )
//found matches
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
var coeFirstLine = amount_figure/sumFirstLine;
var coeSecondLine = (amount_figure/sumSecondLine) + coeFirstLine;
var coeThirdLine = (amount_figure/sumThirdLine) + coeSecondLine;
var coeFourthLine = (amount_figure/sumFourthLine) + coeThirdLine;
var coeFifthLine = (amount_figure/sumFifthLine) + coeFourthLine; 

                                        

console.log( coeSecondLine )
return {collection ,coeFirstLine, coeSecondLine ,coeThirdLine , coeFourthLine , coeFifthLine } 
}
/* const postRecipe = async (req , res) =>{
    
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
    recipeCreated.addStep(steps)
    res.send('Recipe created successfully')

} */
const payMatches = async function ( )  {

var newArr =  (await getMatches()).collection;
var total = await getTotal();
var lastLine = (await getMatches()).coeFifthLine;
var fourthLine = (await getMatches()).coeFourthLine;
var thirdLine = (await getMatches()).coeThirdLine;
var secondLine = (await getMatches()).coeSecondLine;
var firstLine = (await getMatches()).coeFirstLine;

newArr.map(e => {
e.acerts === 5 ? e['pay'] = e.bet * lastLine:
e.acerts === 4 ? e['pay'] = e.bet * fourthLine:
e.acerts === 3 ? e['pay'] = e.bet * thirdLine:
e.acerts === 2 ? e['pay'] = e.bet * secondLine:
e.acerts === 1 ? e['pay'] = e.bet * firstLine:null             
})
console.log(newArr , "ll")
}
module.exports = {
    getPlayers
} 
getMatches()
    .then(payMatches);
