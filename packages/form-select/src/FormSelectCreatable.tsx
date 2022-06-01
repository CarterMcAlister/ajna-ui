import { FormItem } from '@ajna-ui/form-item'
import React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable'
import { FormSelectProps } from './FormSelect'
import { useSelect } from './useSelect'

export const FormSelectCreatable = ({
  label,
  name,
  options = [],
  subText,
  outerProps,
  labelProps,
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
      {...outerProps}
      labelProps={labelProps}
    >
      <CreatableSelect
        isMulti={isMulti}
        menuPlacement="auto"
        {...props}
        {...selectProps}
      />
    </FormItem>
  )
}
