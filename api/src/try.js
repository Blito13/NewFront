const {players ,dbPlayersMock} = require('../src/mock/playeres');

const layout = {
    barbas :  true , 
    clinas : true ,
    piojos: true,
    laFunct : nameFunc = ( indexNumbers , arra , numberToFind) => {
        let reslt = arra.filter(e => 
           
            e.numbers[indexNumbers] === numberToFind
        );

        //sacar coes de cada columna
        return console.log(reslt);
    },
    lePadStrt : funcPad = (arra) =>{
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
    }
}

layout.laFunct(3 , dbPlayersMock , 3);