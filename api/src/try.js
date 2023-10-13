const {players ,dbPlayersMock} = require('../src/mock/playeres');

const layout = {
    searchMatches : searchFunc = ( indexOfNumber , arra , numberToFind) => {
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
    getCoes : funcCoe = (amountFingure , sum , cifra , ntf)=>{
        let coe = (amountFingure/sum) ;
        return coe
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
