import {
  FormErrorMessage as ChakraFormErrorMessage,
  type FormErrorMessageProps as ChakraFormErrorMessageProps,
} from '@chakra-ui/form-control'
import React from 'react'
import { FieldError } from 'react-hook-form'

export interface FormErrorMessageProps extends ChakraFormErrorMessageProps {
  errors: string[] | string | FieldError | undefined
  defaultMessage?: string
}

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({
  errors,
  defaultMessage = 'Invalid selection',
  ...props
}) => {
  const error = Array.isArray(errors)
    ? errors.join(', ')
    : (errors as FieldError)?.message || (errors as string)

  return (
    <ChakraFormErrorMessage {...props}>
      {error || defaultMessage}
    </ChakraFormErrorMessage>
  )
}
