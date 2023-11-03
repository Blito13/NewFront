const nmb = [0,1,2,3,4,5,6,7,8,9];
const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};

const columnsCoeTable = [
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


export default columnsCoeTable;
