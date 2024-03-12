const {players ,thsPlayers, dbPlayersMock} = require('../mock/playeres.js');
const {Playerxs} = require ('../db');
const {Roles} = require ('../db');
const {Numbers} = require ('../db');
const layout = require('../try.js')

const postPlayers =  async (req, res) =>{
    const  {nombre , apuesta , numero} =req.body;   
    const create =  await Playerxs.create({
      name :nombre,
      apuesta,
      numeros :numero
    })
    res.json("Jugada creada con exito")
};
const setDemoPlayers = async (req , res)=> {
    /* let numb =  await setFinalNumber(); */
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
let database = layout.padStart(finded); 
       res.json(database);
};
const editPlay = async (req, res) => {
  const playerId = req.params.id;
  const { name, score } = req.body; // Suponiendo que quieres actualizar el nombre y la puntuación del jugador

  try {
    const player = await Playerxs.findByPk(playerId);

    if (!player) {
      return res.status(404).json({ error: 'Jugador no encontrado' });
    }

    // Actualiza los datos del jugador
    player.name = name;
    player.score = score;

    // Guarda los cambios en la base de datos
    await Playerxs.save();

    return res.status(200).json(player);
  } catch (error) {
    console.error('Error al actualizar el jugador:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};
const getTotal = async () => {
    var totalDb =  await Playerxs.findAll({});
     var total = 0 
     totalDb.forEach(element => {
     total += element.apuesta
    });
    var database = layout.padStart(totalDb); 
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
const setFinalNumber = async (req , res) => {
    let numberFinal =  await Numbers.findAll();
     if(numberFinal.length < 1)    {

         var numberSelected = [];
         var max = 9;
         var min = 0; 
         for(let i = 0 ; i< 5 ; i++){
             let random = parseInt(Math.random() * (max - min) + min);
            numberSelected = [...numberSelected , random]
         };

Numbers.create({
 decenaDeMil : numberSelected[0],
 unidadDeMil : numberSelected[1],
 centena : numberSelected[2],
 decena : numberSelected[3],
 unidad : numberSelected[4]
})
res.status(200).send("Numero aleatorio creado con exito");
     }
     else {
        res.status(200).send("ya existe un numero");
     }
    };

const percentajeOfNumbers = async( req , res) => {
    const arrayOfPlayers =(await getTotal()).database;
    var amount_figure = await getAmountByDigits();
    let final = [];
    for(let i = 0 ; i < 10 ; i ++){
        let obj = {};
        for(let j = 4 ; j > -1  ; j -- ){
            let boole = false;
            let currentArray =  layout.searchMatches(j , arrayOfPlayers , i);
            if(currentArray.length > 0 && boole === false){
                let suma =  layout.getSumOfBets(currentArray);
                let result = layout.getCoes(amount_figure , suma , j , i);
                let idx = layout.variables[j];
                obj[idx] = result;
                obj["numero"] = i;    
            }
            else {
                let idx = layout.variables[j];
                obj[idx] = "noBet";
                obj["numero"] = i; 
                boole = true;
            }
        };
        final = [...final ,obj];

};

res.status(200).send(final);
};
const percentajeOfPlayerGamble = async (req , res) =>{
    const {numero} = req.body;
    const arrayOfPlayers =(await getTotal()).database;
    let current = [];
    let currentCoe = 0;
    let currentTotal  = 0; 
    let amount_figure = await getAmountByDigits();
    let boole = false;
    for (let j = 4 ; j > -1 ; j-- ){
        let currentArray =  layout.searchMatches(j , arrayOfPlayers , numero[j]);
        let suma =  layout.getSumOfBets(currentArray);
        let result = layout.getCoes(amount_figure , suma);
        let idx = layout.variables[j];
        if(  currentArray.length > 0 && boole === false) {
          currentCoe = currentCoe+result; 
        current = [...current ,{
            number : numero[j],
            figure: idx, 
            total : currentCoe, 
            individual : result
        }];
    }else {
        current = [...current ,{
            number : numero[j],
            figure: idx, 
            total : currentCoe, 
            individual : "noMatch"
        }];
        boole = true;
    }
};       
        res.status(200).send(current);
};
const searchWinners = async (req , res ) => {
    let numberFinal =  await Numbers.findAll();
    let currentNumber = [4,6,9,3,0
        /* numberFinal[0].decenaDeMil , 
        numberFinal[0].unidadDeMil , 
        numberFinal[0].centena ,
        numberFinal[0].decena ,
        numberFinal[0].unidad */
];
    let numberLast = currentNumber.map(e => parseFloat(e));
    const arrayOfPlayers =(await getTotal()).database;
    let amount_figure = await getAmountByDigits();
    let current =[];
    let relativeArray =arrayOfPlayers;
    let currentCoe = 0;
    
    for (let i = 4 ; i > -1 ; i -- ){
        let currentArray =  layout.searchMatches(i, relativeArray , numberLast[i]);
        let suma =  layout.getSumOfBets(currentArray);
        let result = layout.getCoes(amount_figure , suma);
        currentCoe = currentCoe+ result; 
        relativeArray=currentArray;
        let [...rest] = currentArray;
     current = [...current , {[layout.variables[i]]:rest}]
       
    };
let acerts = layout.fixResponse(current)

res.status(200).send(acerts);
};

module.exports = {
    setFinalNumber,
    getTotal,
    searchWinners,
    percentajeOfPlayerGamble,
    percentajeOfNumbers,
    setDemoPlayers,
    postPlayers,
    getPlayersDb
} 

