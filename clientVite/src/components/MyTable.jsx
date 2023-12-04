import React, { useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import { useSelector, useDispatch } from 'react-redux';
import { getResults } from '../redux/actions';
import styles from "./MyTable.module.css";
import { animate, motion } from "framer-motion";
const MyTable = (columns) => {
  const colu = useMemo(() => {
    columns.columns
    return [ ...columns.columns]
  }, [columns.data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
   columns : columns.columns,
    data: columns.data,
  });


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
               custom = {{delay  : (index + 1) * 0.3}}
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