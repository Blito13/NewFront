const {players ,dbPlayersMock} = require('../src/mock/playeres');

const layout = {
    barbas :  true , 
    clinas : true ,
    piojos: true,
    searchMatches : searchFunc = ( indexOfNumber , arra , numberToFind) => {
        let reslt = arra.filter(e => 
           
            e.numbers[indexOfNumber] === numberToFind
        );
        //sacar coes de cada columna
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
    getCoes : funcCoe = (amountFingure , sum , prevSum , figure)=>{
       let coe = (amountFingure/sum) + prevSum;
       return coe`${figure}`;
    },
    getSumOfBets : funcSum = () =>{

    },
}

layout.searchMatches(3 , dbPlayersMock , 3);