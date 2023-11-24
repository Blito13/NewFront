const nmb = [0,1,2,3,4,5,6,7,8,9];
import DataWinnersComponent from "./DataWinnersComponent.jsx";
export const allDataPlayersTable = [
  {
      name: 'Nombre',
      selector : row => row.name,
      sortable: true,
  },
  {
      name: 'Apuesta',
      selector : row => row.bet,
      sortable: true,
  },
  {
      name: 'Decena de mil',
      selector: row => row.numero[0],
      sortable: true,
  },
  {
      name: 'Unidad de mil',
      selector: row => row.numero[1],
      sortable: true,
  },
  {
      name: 'Centena',
      selector: row => row.numero[2],
      sortable: true,
  },
  {
      name: 'Decena',
      selector: row => row.numero[3],
      sortable: true,
  },
  {
      name: 'Unidad',
      selector: row => row.numero[4],
      sortable: true,
  },
];
export const dataWinners= [
  {
      name: 'Ganadores 1 acierto',
      selector :  row =>  row.unidad.map((e)=>{ return e.name}),
      sortable: true,
      cell : (row, index, column, id) => {console.log(row.unidad)}
      
  },
  
 /*  {
      name: 'Ganadores 2 aciertos',
      selector : row => row.decena.map((e)=>{return e.name}),
      sortable: true,
  },
  {
      name: 'Ganadores 3 aciertos',
      selector : row => row.centena.map((e)=>{return e.name}),
      sortable: true,
  },
  {
      name: 'Ganadores 3 aciertos',
      selector : row => row.unidadDeMil.map((e)=>{return e.name}),
      sortable: true,
  },
  {
      name: 'Ganadores 4 aciertos',
      selector : row => row.decenaDeMil.map((e)=>{return e.name}),
      sortable: true,
  }, */
 
];
export const columnsCoeTable = [
  {
      name: 'Numeros',
      selector : (row , index) => nmb[index],
      sortable: true,
  },
  {
      name: 'Decena de mil',
      selector: row => row.decenaDeMil,
      sortable: true,
  },
  {
      name: 'Unidad de mil',
      selector: row => row.unidadDeMil,
      sortable: true,
  },
  {
      name: 'Centena',
      selector: row => row.centena,
      sortable: true,
  },
  {
      name: 'Decena',
      selector: row => row.decena,
      sortable: true,
  },
  {
      name: 'Unidad',
      selector: row => row.unidad,
      sortable: true,
  },
];
export const dataNumbersPlayerCoeTable = [
  {
      name: 'Tus Numeros',
      selector :row => row.number,
      sortable: true,
  },
  {
      name: 'Cifra',
      selector: row => row.figure,
      sortable: true,
  },
  {
      name: 'Total',
      selector: row => row.total,
      sortable: true,
  },
  {
      name: 'Parcial',
      selector: row => row.individual,
      sortable: true,
  },
];
export const customStyles = {
    table : {
        style:{
        backgroundColor :"red",
        width : "40rem" ,
        marginTop : "3rem",   
        marginBottom : "3rem",   
        }
    },
    rows: {
        style: {
            minHeight : "0.1rem",
            height :"1rem",
            backgroundColor : 'lightblue', 
            width : "100%"
        },
      },
    headCells: {
        style:{
            justifyContent : "center",
            marginTop : "3rem",
            height :"2rem",
            backgroundColor : 'grey',  
            MaxWidth : "3rem",
            fontSize: "7px",
        }
    ,
      },
      cells: {
        style: {
            justifyContent : "center",
            backgroundColor : 'lightblue',
        },
      },
};

const fill = () => {
return  data.map((e) => {
var newKeys = {

decenaDeMil: Math.floor( Math.random()*(0 , 10)),
unidadDeMil : Math.floor( Math.random()*(0 , 10)),
decena : Math.floor( Math.random()*(0 , 10)),
centena : Math.floor( Math.random()*(0 , 10)),
unidad :Math.floor( Math.random()*(0 , 10))
}
const finalResult =  Object.assign(e , newKeys)

console.log(finalResult)
})  
}

/* 
export default {columnsCoeTable , customStyles}; */
