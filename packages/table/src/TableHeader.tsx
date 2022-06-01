import { Icon } from '@chakra-ui/icon'
import { chakra } from '@chakra-ui/system'
import {
  Th,
  Thead,
  Tr,
  type TableColumnHeaderProps,
  type TableHeadProps as ChakraTableHeadProps,
  type TableRowProps,
} from '@chakra-ui/table'
import React from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { useTableContext } from './table.context'

export interface TableHeadProps extends ChakraTableHeadProps {
  rowProps?: TableRowProps
  headProps?: TableColumnHeaderProps
}

export const TableHead: React.FC<TableHeadProps> = ({
  rowProps,
  headProps,
  ...props
}) => {
  const { headerGroups } = useTableContext()
  return (
    <Thead {...props}>
      {headerGroups.map((headerGroup, i) => (
        <Tr {...headerGroup.getHeaderGroupProps()} {...rowProps} key={i}>
          {headerGroup.headers.map((column: any, i: number) => (
            <Th
              {...column.getHeaderProps(column.getSortByToggleProps())}
              isNumeric={column.isNumeric}
              {...headProps}
              key={i}
            >
              {column.render('Header')}
              <chakra.span pl="4">
                {column.isSorted ? (
                  column.isSortedDesc ? (
                    <Icon as={FaArrowDown} aria-label="sorted descending" />
                  ) : (
                    <Icon as={FaArrowUp} aria-label="sorted ascending" />
                  )
                ) : null}
              </chakra.span>
            </Th>
          ))}
        </Tr>
      ))}
    </Thead>
  )
}
