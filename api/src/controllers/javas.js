const {players ,thsPlayers, dbPlayersMock} = require('../mock/playeres.js');
const {Playerxs} = require ('../db');
const {Roles} = require ('../db');
const layout = require('../try.js')

const postPlayers =  async (req, res) =>{
    const  {name , apuesta , numeros} =req.body;   
    const create =  await Playerxs.create({
        name: name,
        apuesta : apuesta,
        numeros:numeros
    })
    res.json(create)
};
const setDemoPlayers =(req , res)=> {
    const injectedPlayers =  players.map((e)=>{
       Playerxs.create({
            name : e.nombre,
            apuesta : e.apuesta,
            numeros : e.numero
         })
        })
        res.json("jugadores creados con exito")
};
const getPlayersDb = async (req , res) =>{
const pla = await Playerxs.findAll({
    include: { 
        model: Roles, 
        attributes: ['id'],
        through: {
            attributes: [],   
        }
    },
});
       res.json(pla);
      
  
};
const getTotal = async () => {
    /* console.log(players ,"here") */
    var lex =  await Playerxs.findAll({});
     var total = 0 ;

     lex.forEach(element => {
     total += element.apuesta
 })

 var viccio = lex.map(e => {
            return {
                name : e.name,
                id : e.id,
                apuesta : e.apuesta,
                numero : e.numeros,
                createdInDb : e.createdINBd
            }
        })
console.log(total)
return {total , viccio}
};
//La mitad del total dividido en 5 (cada cifra)
var getAmountByDigits = async () =>  {
    var datos =   (await getTotal()).total;
   var half = datos / 2;
   var amount_figure  =  half / 5 ;
   console.log(datos , amount_figure)
   console.log(amount_figure , "amount_figure")
   return amount_figure
};
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
};
const padstart = async () => {
   var datos = await  (await getTotal()).viccio
    console.log(datos , "pix")
 const  numbersArray = datos.map((e,i) => {
    let numStart = Array.from(e.numero.padStart(5, "*"))
    let toInt = numStart.map(e => e = Number(e))
  return{
    bet : e.apuesta,
    numbers : toInt,
    name : e.name,
    id : e.id
  } 
 })
console.log(numbersArray ,"prix")
return numbersArray
};
const getMatches = async function  ()  {
var newArr = await padstart();    
var total = await getTotal();
var amount_figure = await getAmountByDigits();
var winner =[3,7,5,8,0]
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
//funciones hash

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

                                        

console.log(coeFirstLine, coeSecondLine ,coeThirdLine , coeFourthLine , coeFifthLine)

return {collection ,coeFirstLine, coeSecondLine ,coeThirdLine , coeFourthLine , coeFifthLine } 

};
const payMatches = async function ( req , res )  {

var newArr =  (await getMatches()).collection;
console.log(newArr, "xlx")
var lastLine = (await getMatches()).coeFifthLine;
var fourthLine = (await getMatches()).coeFourthLine;
var thirdLine = (await getMatches()).coeThirdLine;
var secondLine = (await getMatches()).coeSecondLine;
var firstLine = (await getMatches()).coeFirstLine;
/* const results = await betPercentaje(); */
newArr.map(e => {
    if(e.acerts === 5 ){
        e['total'] = e.bet * lastLine
        e['4aciertos'] = e.bet * fourthLine
        e['3aciertos'] = e.bet * thirdLine
        e['2aciertos'] = e.bet * secondLine
        e['1acierto'] = e.bet * firstLine      
    }
    else if(e.acerts === 4 ){
        e['4aciertos'] = e.bet * fourthLine
        e['3aciertos'] = e.bet * thirdLine
        e['2aciertos'] = e.bet * secondLine
        e['1acierto'] = e.bet * firstLine    
    }
    else if(e.acerts === 3){
        e['3aciertos'] = e.bet * thirdLine
        e['2aciertos'] = e.bet * secondLine
        e['1acierto'] = e.bet * firstLine     
    }
    else if(e.acerts === 2 ){
        e['2aciertos'] = e.bet * secondLine
        e['1acierto'] = e.bet * firstLine     
    }
    else if(e.acerts === 1 ){
        e['1acierto'] = e.bet * firstLine 
    }
    else return
})        

res.status(200).send(newArr)
};
const betPercentaje = async ( req , res)=>{
    const arrPlayers = await padstart();  
const sts = new Set(arrPlayers['numero'][3])
console.log(sts , "this");
const numbers = [0,1,2,3,5,6,7,8,9];
const index = 0;
var totalZero = 0;
var totalOne = 0;
var totalTwo = 0;
var totalThree = 0;
var totalFour = 0;
var totalFive = 0;
var totalSix = 0;
var totalSeven = 0;
var totalEigth = 0;
var totalNine = 0;  
var amount_figure = await getAmountByDigits();
/* arrPlayers.filter((e.numero) {
}) */
};
/* const payMatches = async function ( req , res )  {

var newArr =  (await getMatches()).collection;
console.log(newArr, "xlx")
var lastLine = (await getMatches()).coeFifthLine;
var fourthLine = (await getMatches()).coeFourthLine;
var thirdLine = (await getMatches()).coeThirdLine;
var secondLine = (await getMatches()).coeSecondLine;
var firstLine = (await getMatches()).coeFirstLine;

newArr.map(e => {
e.acerts === 5 
e.acerts === 4 
e.acerts === 3 
e.acerts === 2 
e.acerts === 1   
newArr.map(e => {
    if(e.acerts === 5 ){
        e['total'] = e.bet * lastLine
        e['4aciertos'] = e.bet * fourthLine
        e['3aciertos'] = e.bet * thirdLine
        e['2aciertos'] = e.bet * secondLine
        e['1acierto'] = e.bet * firstLine      
    }
    else if(e.acerts === 4 ){
        e['4aciertos'] = e.bet * fourthLine
        e['3aciertos'] = e.bet * thirdLine
        e['2aciertos'] = e.bet * secondLine
        e['1acierto'] = e.bet * firstLine    
    }
    else if(e.acerts === 3){
        e['3aciertos'] = e.bet * thirdLine
        e['2aciertos'] = e.bet * secondLine
        e['1acierto'] = e.bet * firstLine     
    }
    else if(e.acerts === 2 ){
        e['2aciertos'] = e.bet * secondLine
        e['1acierto'] = e.bet * firstLine     
    }
    else if(e.acerts === 1 ){
        e['1acierto'] = e.bet * firstLine 
    }
    else return


})        
})
console.log(lastLine , secondLine)
res.status(200).send(newArr)
}; */
const getMoves= async function(req , res)  {
    var constr = await padstart();
    res.status(200).send(constr)
};
const percentajeOfNumbers = async( req , res) => {
    const arrayOfPlayers =dbPlayersMock;
    var amount_figure = await getAmountByDigits();
    let current = [];

    for(let i = 0 ; i < 10 ; i ++){
        for(let j = 4 ; j > -1  ; j -- ){
         let currentArray =  layout.searchMatches(j , arrayOfPlayers , i);
         let suma =  layout.getSumOfBets(currentArray);
         let result = layout.getCoes(amount_figure , suma , j , i);
         current = [...current ,{index :`coe in column ${j} of number ${i}` , total : result } ];
        
            }
};
res.status(200).send(current);
};
const percentajeOfPlayerGamble = async (req , res) =>{
    const numbers =  req.body;
    let arrayOfPlayers = dbPlayersMock;
    var amount_figure = await getAmountByDigits();
    let current = [];
    let perc = 0;
    for(let i = 4 ; i > -1 ; i --){
        let currentArray =  layout.searchMatches(i , arrayOfPlayers , numbers.numbers[i]);
        console.log(currentArray , "aksajldkasj")
         let suma =  layout.getSumOfBets(currentArray);
         let result = layout.getCoes(amount_figure , suma);
         perc += result;
         current = [...current ,{index :`coe of number ${numbers.numbers[i]}` , total : perc ,parcial: result } ];
    };
    res.status(200).send(current);
};

module.exports = {
    percentajeOfPlayerGamble,
    percentajeOfNumbers,
    padstart,
    setDemoPlayers,
    getMoves,
    betPercentaje,
    getMatches,
    postPlayers,
    payMatches,
    getPlayersDb
} 

