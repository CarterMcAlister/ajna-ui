import { FormItem, type DefaultFormItemProps } from '@ajna-ui/form-item'
import type { CheckboxGroupProps } from '@chakra-ui/checkbox'
import { CheckboxGroup } from '@chakra-ui/checkbox'
import React from 'react'
import { useFormContext } from 'react-hook-form'

export interface FormCheckboxGroupProps
  extends DefaultFormItemProps,
    Omit<CheckboxGroupProps, 'name'> {}

export const FormCheckboxGroup = ({
  label,
  name,
  subText,
  outerProps,
  labelProps,
  isRequired,
  children,
  ...props
}: FormCheckboxGroupProps) => {
  const { register } = useFormContext()
  const { onChange, ...checkboxProps } = register(name)

  return (
    <FormItem
      name={name}
      label={label}
      subText={subText}
      isRequired={isRequired}
      {...outerProps}
      labelProps={labelProps}
    >
      <CheckboxGroup
        {...checkboxProps}
        onChange={(value) => onChange({ target: { value } })}
        {...props}
      >
        {children}
      </CheckboxGroup>
    </FormItem>
  )
}
