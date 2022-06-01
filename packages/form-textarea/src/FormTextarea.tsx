import { FormItem, type DefaultFormItemProps } from '@ajna-ui/form-item'
import { useColorModeValue, useToken } from '@chakra-ui/system'
import { Textarea, type TextareaProps } from '@chakra-ui/textarea'
import React from 'react'
import { useFormContext } from 'react-hook-form'

export interface FormTextareaProps
  extends DefaultFormItemProps,
    Omit<TextareaProps, 'name'> {}

export const FormTextarea = ({
  name,
  label,
  subText,
  outerProps,
  labelProps,
  isRequired,
  ...props
}: FormTextareaProps) => {
  const {
    register,
    formState: { isSubmitting },
  } = useFormContext()
  const [lightBg] = useToken('colors', ['white'])
  const bgColor = useColorModeValue(lightBg, 'transparent')

  return (
    <FormItem
      name={name}
      label={label}
      subText={subText}
      isRequired={isRequired}
      {...outerProps}
      labelProps={labelProps}
    >
      <Textarea
        isDisabled={isSubmitting}
        bg={bgColor}
        {...props}
        {...register(name)}
      />
    </FormItem>
  )
}
