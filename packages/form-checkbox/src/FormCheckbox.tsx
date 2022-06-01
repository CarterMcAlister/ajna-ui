import { FormItem, type DefaultFormItemProps } from '@ajna-ui/form-item'
import { Checkbox, type CheckboxProps } from '@chakra-ui/checkbox'
import React from 'react'
import { useController, useFormContext } from 'react-hook-form'

export interface FormCheckboxProps
  extends DefaultFormItemProps,
    Omit<CheckboxProps, 'name'> {}

export const FormCheckbox = ({
  label,
  name,
  subText,
  outerProps,
  labelProps,
  isRequired,
  children,
  ...props
}: FormCheckboxProps) => {
  const { control } = useFormContext()
  const {
    field: { onChange, value, ...controlProps },
  } = useController({ name, control, defaultValue: false })

  return (
    <FormItem
      name={name}
      label={label}
      subText={subText}
      isRequired={isRequired}
      {...outerProps}
      labelProps={labelProps}
    >
      <Checkbox
        {...props}
        {...controlProps}
        value={value ? 'true' : 'false'}
        defaultChecked={value}
        onChange={onChange}
      >
        {children}
      </Checkbox>
    </FormItem>
  )
}
