import React, { useEffect } from 'react';
import { useTable } from 'react-table';
import { useSelector, useDispatch } from 'react-redux';
import { getCoeNumbers, getUserNumbers, getPlayersDb, getResults } from '../redux/actions';

const MyTable = ({ data }) => {
  const dispatch = useDispatch();
  const finalResults = useSelector((state) => state.finalResults);

  // Aplanar los datos
  const flatData = finalResults.reduce((acc, category) => {
    const key = Object.keys(category)[0];
    if (category[key].length > 0) {
      acc = [...acc, ...category[key]];
    }
    return acc;
  }, []);

  // Obtener las columnas
  const columns = flatData.length > 0 ? Object.keys(flatData[0]).map((key) => ({ Header: key, accessor: key })) : [];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: flatData,
  });

  useEffect(async () => {
   await dispatch(getResults());
  }, [finalResults]);

  return (
    <table {...getTableProps()} className="mi-tabla">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
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
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MyTable;
