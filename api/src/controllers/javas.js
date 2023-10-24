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
const finded = await Playerxs.findAll({
    include: { 
        model: Roles, 
        attributes: ['id'],
        through: {
            attributes: [],   
        }
    },
});
       res.json(finded);
};
const getTotal = async () => {
    var totalDb =  await Playerxs.findAll({});
     var total = 0 
     totalDb.forEach(element => {
     total += element.apuesta
 })

 var database = layout.padStart(totalDb); 
 console.log(database,"expires");
 /* totalDb.map(e => {
            return {
                name : e.name,
                id : e.id,
                apuesta : e.apuesta,
                numero : Array.from(e.numeros.map(e => e = Number(e))),
                createdInDb : e.createdINBd
            }
        }) */
console.log(total)
return {total , database}
};

var getAmountByDigits = async () =>  {
   var datos =   (await getTotal()).total;
   var half = datos / 2;
   var amount_figure  =  half / 5 ;
   console.log(datos , amount_figure)
   console.log(amount_figure , "amount_figure")
   return amount_figure
};

const percentajeOfNumbers = async( req , res) => {
    const arrayOfPlayers =(await getTotal()).database;
    var amount_figure = await getAmountByDigits();
    let current = [];
    let final = [];
    for(let i = 0 ; i < 10 ; i ++){
        let obj = {};
         let index = i;
         for(let j = 4 ; j > -1  ; j -- ){
             let currentArray =  layout.searchMatches(j , arrayOfPlayers , i);
             let suma =  layout.getSumOfBets(currentArray);
             let result = layout.getCoes(amount_figure , suma , j , i);
             
             let idx = layout.variables[j];
         obj[idx]  = result;
        };
        /* final = current */
        
      /*    obj[index] = obj; */
        
        current = [...current ,  ob];
            
};
res.status(200).send(current);
};
const percentajeOfPlayerGamble = async (req , res) =>{
    const numero = req.body;
    const arrayOfPlayers =dbPlayersMock;
    let current = [];
    let currentCoe = 0;
    let amount_figure = await getAmountByDigits();
    console.log(currentCoe !== 0)
    for (let j = 4 ; j > -1 ; j-- ){
        let currentArray =  layout.searchMatches(j , arrayOfPlayers , numero.numeros[j]);
        let suma =  layout.getSumOfBets(currentArray);
        let result = layout.getCoes(amount_figure , suma);
        currentCoe = currentCoe+ result; 
        current = [...current ,{
            j:`coe in column ${j} of number ${numero.numeros[j]}`, 
            total : currentCoe , 
            individual : result  
        }];
   
};       
        res.status(200).send(current);
};
const searchWinners = async (req , res ) => {
    const numberWinner = req.body; 
    let currentPlayers = [];
    let playersMock =  dbPlayersMock;
    let amount_figure = await getAmountByDigits();
    let current =[];
    let relativeArray =playersMock;
    let currentCoe = 0;

    for (let i = 4 ; i > -1 ; i -- ){
        
        let currentArray =  layout.searchMatches(i, relativeArray , numberWinner.numeros[i]);
        let suma =  layout.getSumOfBets(currentArray);
        let result = layout.getCoes(amount_figure , suma);
        currentCoe = currentCoe+ result; 
        relativeArray=currentArray;
        current=[...current, {
                                [layout.variables[i]] : currentArray,
                                individual : result,
                                total : currentCoe  
                             }];
    }
res.status(200).send(current);
};


module.exports = {
    searchWinners,
    percentajeOfPlayerGamble,
    percentajeOfNumbers,
    setDemoPlayers,
    postPlayers,
    getPlayersDb
} 

