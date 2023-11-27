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
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  }
  const list ={
    open: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.6,
        staggerChildren: 0.05
      }
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    }
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
      <tbody {...getTableBodyProps()}>
        {rows.map((row  ,index) => {
          prepareRow(row);
          return (
             <motion.tr
                initial= "closed"
                animate = "open"
                variants={list}
                className={styles.tableRows} 
                {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <motion.td
                variants={item} 
                 className={styles.tableData}
                 {...cell.getCellProps()}>
                  {cell.render('Cell')}
                  </motion.td>
              ))}
            </motion.tr>
          );
        })}
      </tbody>
    </motion.table>
  );
};

export default MyTable;