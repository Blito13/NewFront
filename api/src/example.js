const arr1 = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10));;
const arr2 = [0,1,2];
/* let arr1 = arr1.reverse(); */
/* let arr2 = arr2.reverse(); */
let response = []
 for (let ind = 2 ; ind>-1 ; ind --){
    if(ind === 2 && arr1[ind] !== arr2[ind]) {
        
        response.push(["no hay coincidencias/ no matches at all"])
        break
    }
    if(arr1[ind] !== arr2[ind]){
      response.noCoinciden? response.noCoinciden +=1 :  response["noCoinciden"] = 1;
    }else {
        response.coinciden ? response.coinciden +=1 : response["coinciden"] = 1;
    }

};


console.log(arr1 , arr2 ,response);