export const  validate = (input)=>{
    let error= {};
    if(!input.name){
        error.name = 'Name is required';
    }else if(!input.apuesta){
        error.apuesta = 'apuesta is required';
    }else if(input.numero.length < 0 || input.numeros.length > 6){
        error.numeros = 'MAX NUMBERS : 5'
    }
    return error;
};