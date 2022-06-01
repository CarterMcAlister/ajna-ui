import { Table as ChakraTable, TableContainer } from '@chakra-ui/table'
import React from 'react'
import { useTable, type PluginHook, type TableOptions } from 'react-table'
import { ReactTableContext } from './table.context'

export interface TableProps<D extends object = {}> {
  tableOptions: TableOptions<D>
  tablePlugins: Array<PluginHook<D>>
  children?: React.ReactNode
}

export const Table: React.FC<TableProps> = ({
  tableOptions,
  tablePlugins,
  children,
}) => {
  const tableValues = useTable(tableOptions, ...tablePlugins)
  return (
    <TableContainer>
      <ChakraTable {...tableValues.getTableProps()}>
        <ReactTableContext.Provider value={{ ...tableValues }}>
          {children}
        </ReactTableContext.Provider>
      </ChakraTable>
    </TableContainer>
  )
}
