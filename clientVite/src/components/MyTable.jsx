import React, { useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import { useSelector, useDispatch } from 'react-redux';
import { getResults } from '../redux/actions';
import styles from './MyTable.module.css'; 
const MyTable = ({ data }) => {
  const dispatch = useDispatch();
  const finalResults = useSelector((state) => state.finalResults);
  console.log(finalResults , "ciias")

  const columns = useMemo(() => {
    const extraColumns = [
      { Header: 'aciertos', accessor: `aciertos` },
      { Header: 'bet', accessor: `bet` },
      { Header: 'name', accessor: `name` },
      { Header: 'Decena de Mil', accessor: `numero[${0}]`||"no bet" },
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

  return (
    <table {...getTableProps()} className="mi-tabla">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td className={cell.value === 4 ? styles.ganador : ''} {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MyTable;