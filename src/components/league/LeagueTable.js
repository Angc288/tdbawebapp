import React from 'react';

import { useTable } from 'react-table'
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function ReactLeagueTable({data})  {  
  
  const columns = React.useMemo(
    () => [
        {
          Header: 'Team',
          accessor: 'name', // accessor is the "key" in the data
        },
        {
          Header: 'Played',
          accessor: 'played',
        },
        {
          Header: 'Won',
          accessor: 'won', // accessor is the "key" in the data
        },
        {
          Header: 'Lost',
          accessor: 'lost',
        },
        {
          Header: 'Drawn',
          accessor: 'drawn', // accessor is the "key" in the data
        },
        {
          Header: 'For',
          accessor: 'for',
        },
        {
          Header: 'Against',
          accessor: 'against', // accessor is the "key" in the data
        },
        {
          Header: 'SD',
          accessor: 'shotDifference',
        },
        {
          Header: 'Points',
          accessor: 'points',
        }
      ]
    )

  const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })
    

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

export default ReactLeagueTable;