const arr1 = [8,0,2,4,5];
const arr2 = [0,1,2,4,5];
let rev1 = arr1.reverse();
let rev2 = arr2.reverse();
let response = []
 for (let ind = 0 ; ind<5 ; ind ++){
    if(ind === 0 && rev1[ind] !== rev2[ind]) {
        
        response.push(["no hay coincidencias/ no matches at all"])
        break
    }
    if(rev1[ind] !== rev2[ind]){
        response.push( ["no coinciden"])
    }else {
        response.push( ["coinciden"])
    }

};


console.log(response);