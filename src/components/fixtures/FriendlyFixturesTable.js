import React from 'react';

import { useTable } from 'react-table'
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function FriendlyFixturesTable({ data }) {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Match Id',
        accessor: 'matchId', // accessor is the "key" in the data
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Club',
        accessor: 'club', // accessor is the "key" in the data
      },
      {
        Header: 'Venue',
        accessor: 'venue',
      },
      {
        Header: 'Phone',
        accessor: 'phone', // accessor is the "key" in the data
      },
      {
        Header: 'Time',
        accessor: 'time',
      },
      {
        Header: 'Rinks',
        accessor: 'rinks', // accessor is the "key" in the data
      },
      {
        Header: 'Dress',
        accessor: 'dress',
      },
      {
        Header: 'Food',
        accessor: 'food',
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
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [
          { id: 'matchId', desc: true }
        ]
      }
    }
  )


  return (
    <MaUTable {...getTableProps()}
      style={{
        border: 'solid 1px blue',
        marginBottom: 100
      }}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}
                style={{
                  background: '#360037',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '20',
                  padding: '3px 15px 3px 15px',
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
                      padding: '5px',
                      border: 'solid 1px gray',
                      background: '#E8E8E8'
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

export default FriendlyFixturesTable;