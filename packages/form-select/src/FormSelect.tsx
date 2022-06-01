import { FormItem, type DefaultFormItemProps } from '@ajna-ui/form-item'
import React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { Select } from './Select'
import { type SelectProps } from './SelectProps'
import { useSelect, type SelectType } from './useSelect'

export interface FormSelectProps
  extends DefaultFormItemProps,
    Omit<SelectProps, 'name'> {
  options: SelectType
  isMulti?: boolean
}

// todo: consolidate logic with FormSelectCreatable
export const FormSelect = ({
  label,
  name,
  options,
  subText,
  outerProps,
  labelProps,
  isRequired,
  isMulti,
  ...props
}: FormSelectProps) => {
  const { control } = useFormContext()
  const { field } = useController({
    name,
    control,
    defaultValue: isMulti ? [] : '',
  })

  const selectProps = useSelect({
    options,
    isMulti,
    ...field,
  })

  return (
    <FormItem
      name={name}
      label={label}
      subText={subText}
      isRequired={isRequired}
      {...outerProps}
      labelProps={labelProps}
    >
      <Select
        isMulti={isMulti}
        menuPlacement="auto"
        {...props}
        {...selectProps}
      />
    </FormItem>
  )
}
