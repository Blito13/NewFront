const {players ,dbPlayersMock} = require('../src/mock/playeres');

const layout = {
currentCoe : 0,
    searchMatches : searchFunc = ( indexOfNumber , arra , numberToFind) => {
         if (indexOfNumber > 4 || indexOfNumber < 0) return console.log("error in index of number");
         if (numberToFind > 9 || numberToFind < 0) return console.log(" error in  number to find");

        let reslt = arra.filter(e     => 
           
            e.numbers[indexOfNumber] === numberToFind
        );
       
    
        return reslt;
    },
    padStart : funcPad = (arra) =>{
        const  numbersArray = arra.map((e,i) => {
            let numStart = Array.from(e.numero.padStart(5, "*"))
            let toInt = numStart.map(e => e = Number(e))
          return{
            bet : e.apuesta,
            numbers : toInt,
            name : e.name,
            id : e.id
          } 
         })
         return console.log(numbersArray);
    },
    getCoes : funcCoe = (amountFingure , sum , prevSum , figure , number)=>{
        //tengo q ver donde almacenar los coe de cada lista
        let currentFigure = figure===4? "unit" : figure === 3 ? "ten" : figure === 2 ?  "hundred" : figure === 1 ? "unit of a thousand" : "ten thousand";
        let coedsd = (amountFingure/sum) ;
        return coedsd
    },
    getSumOfBets : funcSum = (arra) =>{
        let sum = 0 ; 
        arra.map(e => sum += e.bet);
        return sum;

    },
    getRelativePay : funcRelativePay = (bet, coe , line) =>{
        let relativePay = 0;
        relativePay = bet *coe;
        return relativePay;
    },


}

module.exports = layout;
