const layout = {
    variables :["decenaDeMil" , "unidadDeMil" , "centena" , "decena" , "unidad"],
    fixResponse : utilFunc = (toFix)=>{
        let flated =toFix.reduce((acc, category) => {
            const key = Object.keys(category)[0];
            if (category[key].length > 0) {
              acc = [...acc, ...category[key]];
            }
            return acc;
          }, []);
          

          let uniqueArray = [];    
       
       flated.map((elm , i)=>{
             
           if( !uniqueArray.includes(elm)) {
                elm.aciertos = 1
                uniqueArray= [...uniqueArray , elm ]
           }else {
          let resp = uniqueArray.indexOf(elm)
           uniqueArray[resp].aciertos +=1
           }
            


          })
       return uniqueArray

    },
    searchMatches : searchFunc = ( indexOfNumber , arra , numberToFind) => {
    
        let reslt = arra.filter(e     => 
           
            e.numero[indexOfNumber] === numberToFind
        );
        return reslt;
    },
    padStart : funcPad =  (arra) =>{
        
        const  numbersArray = arra.map((e,i) => {
            let numStart = Array.from(e.numeros.padStart(5, "no-bets"))
            let toInt = numStart.map(e => e = Number(e))
          return{
            name : e.name,
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
        if (sum === 0) console.log(arra , "here arra")
        return sum;
    },
    getPayPay : funcRelativePay = (bet, coe , line) =>{
        let relativePay = 0;
        relativePay = bet *coe;
        return relativePay;
    },


}

module.exports = layout;
