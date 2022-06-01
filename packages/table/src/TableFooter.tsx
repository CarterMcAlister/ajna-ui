import {
  Tfoot as ChakraTfoot,
  Th,
  Tr,
  type TableColumnHeaderProps,
  type TableFooterProps as ChakraTableFooterProps,
  type TableRowProps,
} from '@chakra-ui/table'
import React from 'react'
import { useTableContext } from './table.context'

export interface TableFooterProps extends ChakraTableFooterProps {
  rowProps?: TableRowProps
  headProps?: TableColumnHeaderProps
}

export const TableFooter: React.FC<TableFooterProps> = ({
  rowProps,
  headProps,
  ...props
}) => {
  const { footerGroups } = useTableContext()
  return (
    <ChakraTfoot {...props}>
      {footerGroups.map((footerGroup, i) => (
        <Tr {...footerGroup.getFooterGroupProps()} {...rowProps} key={i}>
          {footerGroup.headers.map((header: any, i: number) => (
            <Th colSpan={header.colSpan} {...headProps} key={header.id}>
              {header.isPlaceholder ? null : header.renderFooter()}
            </Th>
          ))}
        </Tr>
      ))}
    </ChakraTfoot>
  )
}
