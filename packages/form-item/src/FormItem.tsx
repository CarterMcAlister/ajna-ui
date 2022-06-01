import { FormErrorMessage } from '@ajna-ui/form-error-message'
import {
  FormControl, FormHelperText,
  FormLabel, type FormControlProps,
  type FormErrorMessageProps, type FormLabelProps
} from '@chakra-ui/form-control'
import { VisuallyHidden } from '@chakra-ui/visually-hidden'
import React, { type PropsWithoutRef } from 'react'
import { useFormError } from './useFormError'

export interface DefaultFormItemProps {
  /** Field name. */
  name: string
  /** Field label. */
  label?: string
  subText?: string
  isRequired?: boolean
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: 'text' | 'password' | 'email' | 'number'
  outerProps?: PropsWithoutRef<FormControlProps>
  labelProps?: PropsWithoutRef<FormLabelProps>
  errorMessageProps?: PropsWithoutRef<FormErrorMessageProps>
}

export type FormItemProps = DefaultFormItemProps & FormControlProps

export const FormItem: React.FC<FormItemProps> = ({
  label,
  name,
  subText,
  children,
  labelProps,
  outerProps,
  errorMessageProps,
  ...props
}) => {
  const error = useFormError(name)
  return (
    <FormControl isInvalid={!!error} {...outerProps} {...props}>
      {label ? (
        <FormLabel htmlFor={name} {...labelProps}>
          {label}
        </FormLabel>
      ) : (
        <VisuallyHidden>
          <FormLabel htmlFor={name}>{name}</FormLabel>
        </VisuallyHidden>
      )}
      {children}
      {subText && <FormHelperText>{subText}</FormHelperText>}
      <FormErrorMessage errors={error} {...errorMessageProps} />
    </FormControl>
  )
}
