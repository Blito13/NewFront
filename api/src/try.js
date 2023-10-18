const layout = {
    variables :["decenaDeMil" , "unidadDeMil" , "centena" , "decena" , "unidad"],
    searchMatches : searchFunc = ( indexOfNumber , arra , numberToFind) => {
        console.log(arra , " jshdajkhh");
        let reslt = arra.filter(e     => 
           
            e.numero[indexOfNumber] === numberToFind
        );
        return reslt;
    },
    padStart : funcPad =  (arra) =>{
        console.log(arra , "le")
        const  numbersArray = arra.map((e,i) => {
            let numStart = Array.from(e.numeros.padStart(5, "*"))
            let toInt = numStart.map(e => e = Number(e))
          return{
            bet : e.apuesta,
            numero : toInt,
            name : e.name,
            id : e.id,
            createdInDb : e.createdINBd
          } 
         })
         return numbersArray;
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
