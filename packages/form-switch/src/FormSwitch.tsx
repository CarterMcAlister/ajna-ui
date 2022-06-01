import { FormItem, type DefaultFormItemProps } from '@ajna-ui/form-item'
import { Switch, type SwitchProps } from '@chakra-ui/switch'
import React from 'react'
import { useFormContext } from 'react-hook-form'

export interface FormSwitchProps
  extends DefaultFormItemProps,
    Omit<SwitchProps, 'name'> {}

export const FormSwitch = ({
  name,
  label,
  subText,
  outerProps,
  labelProps,
  ...props
}: FormSwitchProps) => {
  const { register } = useFormContext()

  return (
    <FormItem
      name={name}
      label={label}
      subText={subText}
      {...outerProps}
      labelProps={labelProps}
    >
      <Switch id={name} {...register(name)} {...props} />
    </FormItem>
  )
}
