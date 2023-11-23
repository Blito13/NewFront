const layout = {
    variables :["decenaDeMil" , "unidadDeMil" , "centena" , "decena" , "unidad"],
    flatterFunc : flater = async (array) => {
        var objetoX = {};
        var unidad = {};
        
        array.unidad.forEach((e) => {
      
          let com = {
            [e.id]: {  // Utiliza el ID como clave única para los objetos dentro de com si le pasamos una clave fija , la vuelve a sobreescribir en cada iteracion y eso produce que solo devuelva el ultimo elemento
              nombre: e.name,
              apuesta: e.bet,
              numero: e.numero,
              id: e.id,
              createdInDb: e.createdInDb
            }
          };
        
          objetoX = { ...objetoX, ...com };
        });
        
        unidad.objetoX = objetoX;
        return unidad
      },
    
    searchMatches : searchFunc = async ( indexOfNumber , arra , numberToFind) => {
    
        let reslt = arra.filter(e     => 
           
            e.numero[indexOfNumber] === numberToFind
        );
        return reslt;
    },
    padStart : funcPad =  (arra) =>{
        
        const  numbersArray = arra.map((e,i) => {
            let numStart = Array.from(e.numeros.padStart(5, "s"))
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
        return sum;
    },
    getPayPay : funcRelativePay = (bet, coe , line) =>{
        let relativePay = 0;
        relativePay = bet *coe;
        return relativePay;
    },


}

module.exports = layout;
