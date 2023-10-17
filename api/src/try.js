const layout = {
    variables :["decenaDeMil" , "unidadDeMil" , "centena" , "decena" , "unidad"],
    searchMatches : searchFunc = ( indexOfNumber , arra , numberToFind) => {
        console.log(arra , " jshdajkhh");
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
    getPayPay : funcRelativePay = (bet, coe , line) =>{
        let relativePay = 0;
        relativePay = bet *coe;
        return relativePay;
    },


}

module.exports = layout;
