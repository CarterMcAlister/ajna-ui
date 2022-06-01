import { Button, type ButtonProps } from '@chakra-ui/react'
import React from 'react'
import { useFormContext } from 'react-hook-form'

export const FormSubmitButton = (props: ButtonProps) => {
  const { formState } = useFormContext()
  return <Button type="submit" isDisabled={formState.isSubmitting} {...props} />
}
