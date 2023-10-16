const {players ,dbPlayersMock} = require('../src/mock/playeres');

const layout = {
    searchMatches : searchFunc = ( indexOfNumber , arra , numberToFind) => {
<<<<<<< HEAD
         if (indexOfNumber > 4 || indexOfNumber < 0) return console.log("error in index of number");
         if (numberToFind > 9 || numberToFind < 0) return console.log(" error in  number to find");

=======
>>>>>>> a5942165952369a9d2b0ea882210a4f1b0dd4cab
        let reslt = arra.filter(e     => 
           
            e.numbers[indexOfNumber] === numberToFind
        );
<<<<<<< HEAD
       
    
       reslt['indexDeCifra'] = indexOfNumber;
       reslt['numeroBuscado'] = numberToFind;
            console.log(reslt)
       return reslt
=======
        return reslt;
>>>>>>> a5942165952369a9d2b0ea882210a4f1b0dd4cab
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
