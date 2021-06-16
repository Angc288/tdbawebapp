import React from 'react';

import { useTable } from 'react-table'
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function OfficerTable({ data}) {

  const columns = React.useMemo(
    () => [
    {
      Header: 'Role',
      accessor: 'role', // accessor is the "key" in the data
    },
    {
      Header: 'Holder',
      accessor: 'holder',
    },
    {
      Header: 'Club',
      accessor: 'club', // accessor is the "key" in the data
    }
  ],
  []
)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data})

  return (
    <MaUTable {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}
              style={{
                background: '#E8E8E8',
                color: 'dark grey',
                fontWeight: 'bold',
                fontSize: '20',
                padding: '20px 8px 20px 8px',
                marginBottom: 40
              }}>
                {column.render('Header')}
              </th>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TableCell
                    {...cell.getCellProps()}
                    style={{
                      padding: '20px 8px 20px 8px',
                      // border: 'solid 1px gray',
                      background: 'white'
                    }}
                  >
                    {cell.render('Cell')}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </MaUTable>
  )
}



export default OfficerTable;
