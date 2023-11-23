const nmb = [0,1,2,3,4,5,6,7,8,9];
const selector = ["Ganadores 1 cifra","Ganadores 2 cifra","Ganadores 3 cifra","Ganadores 4 cifra","Ganadores 5 cifras",]
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
export const dataWinners = [
/*   {
      name: 'Winners',
      selector : (row , index) => selector[index],
      sortable: true,
  }, */
  {
      name: 'Nombre',
      selector : row => row.name,
      sortable: true,
  },
  /* {
      name: 'Apuesta',
      selector : (row , index) => nmb[index],
      sortable: true,
  }, */
 /*  {
    name: 'Decena de mil',
    selector: row => row[4].numero[0],
    sortable: true,
},
{
    name: 'Unidad de mil',
    selector: row => row[3].numero[1],
    sortable: true,
},
{
    name: 'Centena',
    selector: row => row[2].numero[2],
    sortable: true,
},
{
    name: 'Decena',
    selector: row => row.decena[1].numero[3],
    sortable: true,
},
{
    name: 'Unidad',
    selector: row => row[0].numero[4],
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
