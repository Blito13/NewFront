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

//Obtener total apostado
/* var primerMetodo = function() {
   var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('Terminó el primer método');
         resolve({num: '123'}); //pasamos unos datos para ver como los manejamos
      }, 2000); // para simular algo asincronico hacemos un setTimeOut de 2 s
   });
   return promise;
}; */
/* var segundoMetodo = function(datos) {
   var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('Terminó el segundo método');
         resolve({nuevosDatos: datos.num + ' concatenamos texto y lo pasamos'});
      }, 2000);
   });
   return promise;
};
  */
/*  var tercerMetodo = function(datos) {
   var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('Terminó el tercer método');
         console.log(datos.nuevosDatos); //imprimos los datos concatenados
         resolve('hola');
      }, 3000);
   });
   return promise;
}; */
 
/* primerMetodo()
   .then(segundoMetodo)
   .then(tercerMetodo)
   .then(function(datos){
     console.log(datos); //debería ser el 'hola' que pasamos en tercerMetodo
   }); */
var getTotal = function (players) {
    var promise = new Promise(function (resolve, reject){
     var total = 0 ;

     players.forEach(element => {
     total += element.apuesta
 })
 console.log(total)
 resolve(total)
})
return promise
} 
//La mitad del total dividido en 5 (cada cifra)
var getAmountByDigits = function (datos)  {
var promise = new Promise(function (resolve , reject){
    
   var half = datos / 2;
   var amount_figure  =  half / 5 ;
   console.log(datos , amount_figure)
    resolve(amount_figure)
})

return promise

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
const getMatches = async function  (newArr )  {
var winner = await getFinalNumber();

var oneLine = newArr.filter(e => e.numbers[4]===winner[4]);
var twoLines = oneLine?.filter(e => e.numbers[3] === winner[3]);
var trheeLines = twoLines?.filter(e => e.numbers[2] === winner[2]);
var fourLines = trheeLines?.filter(e => e.numbers[1] === winner[1]);
var fiveLines = fourLines?.filter(e => e.numbers[0] === winner[0]);
var index = [4];
var switches  = false;


return [oneLine , twoLines , trheeLines , fourLines , fiveLines]

}

const payMatches = async function (oneLine , twoLines , trheeLines , fourLines , fiveLines)  {
//validar las cifras sin ganadores para acumular lo apostado para la proxima jugada
//PORCENTAJE : AMOUNT_FIGURE / TOTAL DE LAS APUESTAS ganadoras A ESA CIFRA(1,2,3,4,5)
// RESULTADO DE LA PAGA = PORCENTAJE X CADA APUESTA
console.log(oneLine , twoLines , trheeLines , fourLines , fiveLines)

var collection  = 0;

console.log(oneLine , "here" )
}

getTotal(players)
.then(getAmountByDigits)
.then(getFinalNumber)
.then(padstart)
.then(getMatches)
.then(payMatches)
/* .then( result => getAmountByDigits(result))
.then( result => console.log(result)) */

/* Promise.all([getAmountByDigits() , getFinalNumber(), getTotal(players)] , getMatches(getFinalNumber)) .then(response => {
    console.log(response)
}) */