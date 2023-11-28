import React, { useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import { useSelector, useDispatch } from 'react-redux';
import { getResults } from '../redux/actions';
import styles from "./MyTable.module.css";
import { animate, motion } from "framer-motion";
const MyTable = ({ data }) => {
  const dispatch = useDispatch();
  const finalResults = useSelector((state) => state.finalResults);
  console.log(finalResults , "ciias")

  const columns = useMemo(() => {
    const extraColumns = [
      { Header: 'Aciertos', accessor: `aciertos` },
      { Header: 'Bet', accessor: `bet` },
      { Header: 'Name', accessor: `name` },
      { Header: 'Decena de Mil', accessor: `numero[${0}]` },
      { Header: 'Unidad de Mil', accessor: `numero[${1}]` },
      { Header: 'Centena', accessor: `numero[${2}]`},
      { Header: 'Decena', accessor: `numero[${3}]`},
      { Header: 'Unidad', accessor: `numero[${4}]` },
    ];
  
    return [ ...extraColumns]
  }, [finalResults]);
console.log(columns ,"new scratch")
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: finalResults,
  });

  useEffect(() => {
    dispatch(getResults());
  }, [dispatch]);

  const item = {
    hidden: { opacity: 0 , y : 20},
    visible:({delay}) =>( {
      y:0,
      opacity: 1,
      transition: {
        delay ,
        duration: 1
      }
    }),
  }

  return (
    <motion.table
    className={styles.container}  {...getTableProps()} >
      <thead className = {styles.tableHead}>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <motion.tbody
       {...getTableBodyProps()}>
        {rows.map((row  ,index) => {
          prepareRow(row);
          return (
             <motion.tr
               initial = "hidden"
               custom = {{delay  : (index + 1) * 0.4}}
               animate = "visible"
                variants={item}
                className={styles.tableRows} 
                {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <motion.td
                 className={styles.tableData}
                 {...cell.getCellProps()}>
                  {cell.render('Cell')}
                  </motion.td>
              ))}
            </motion.tr>
          );
        })}
      </motion.tbody>
    </motion.table>
  );
};

export default MyTable;