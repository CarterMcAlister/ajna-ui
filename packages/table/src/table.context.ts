import React from 'react'
import { type TableInstance } from 'react-table'

export const ReactTableContext = React.createContext({} as TableInstance)

export const useTableContext = () => React.useContext(ReactTableContext)
