import {
  Tbody,
  Td,
  Tr,
  type TableCellProps,
  type TableHeadProps as ChakraTableHeadProps,
  type TableRowProps,
} from '@chakra-ui/table'
import React from 'react'
import { useTableContext } from './table.context'

export interface TableBodyProps extends ChakraTableHeadProps {
  rowProps?: TableRowProps
  cellProps?: TableCellProps
}

export const TableBody: React.FC<TableBodyProps> = ({
  rowProps,
  cellProps,
  ...props
}) => {
  const { getTableBodyProps, rows, prepareRow } = useTableContext()
  return (
    <Tbody {...getTableBodyProps()} {...props}>
      {rows.map((row, i) => {
        prepareRow(row)
        return (
          <Tr {...row.getRowProps()} key={i}>
            {row.cells.map((cell: any, i) => (
              <Td
                {...cell.getCellProps()}
                isNumeric={cell.column.isNumeric}
                {...cellProps}
                key={i}
              >
                {cell.render('Cell')}
              </Td>
            ))}
          </Tr>
        )
      })}
    </Tbody>
  )
}
