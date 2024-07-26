const arrWinner = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));;
let arraysToCompare = [
  [1, 2, 3, 4, 3],
  [1, 2, 0, 4, 9],
  [0, 2, 3, 4, 2],
  [1, 2, 3, 0, 6]
];
function compareArrays(arrWinner, arraysToCompare) {
    return arraysToCompare.map(arrToCompare => {
      var response = {
        noCoinciden: 0,
        coinciden: 0,
        message: "",
        numberWinner: [],
        numberPlayed: []
      };
  
      for (let ind = 4; ind > -1; ind--) {
        if (arrWinner[ind] !== arrToCompare[ind]) {
          response.message = "no hay coincidencias/ no matches at all";
          break;
        }
        if (arrWinner[ind] !== arrToCompare[ind]) {
          response.noCoinciden += 1;
        } else {
          response.coinciden += 1;
        }
      }
  
      if (response.coinciden > 0) {
        response.message = `${response.coinciden} coincidencias/ matches`;
      }
  
      response.numberPlayed = arrToCompare;
      response.numberWinner = arrWinner;
  
      return response;
    });
  }

  let results = compareArrays(arrWinner, arraysToCompare);
  
  console.log(results);