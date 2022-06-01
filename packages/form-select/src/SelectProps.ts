import { type SelectProps as ChakraSelectProps } from '@chakra-ui/react'
import { type Props as ReactSelectProps } from 'react-select'

export type SelectProps = Omit<
  ChakraSelectProps,
  'children' | 'onChange' | 'value' | 'defaultValue'
> &
  Omit<ReactSelectProps, 'children'>
