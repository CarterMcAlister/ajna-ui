import { forwardRef } from 'react'
import ReactSelect from 'react-select'
import AsyncReactSelect from 'react-select/async'
import CreatableReactSelect from 'react-select/creatable'
import { ChakraReactSelect } from './ChakraReactSelect'
import { SelectProps } from './SelectProps'

export const Select = forwardRef((props: SelectProps, ref: React.Ref<any>) => (
  <ChakraReactSelect {...props}>
    <ReactSelect ref={ref} />
  </ChakraReactSelect>
))

export const AsyncSelect = forwardRef(
  (props: SelectProps, ref: React.Ref<any>) => (
    <ChakraReactSelect {...props}>
      <AsyncReactSelect ref={ref} />
    </ChakraReactSelect>
  )
)

export const CreatableSelect = forwardRef(
  (props: SelectProps, ref: React.Ref<any>) => (
    <ChakraReactSelect {...props}>
      <CreatableReactSelect ref={ref} />
    </ChakraReactSelect>
  )
)
