import { FormInput, type FormInputProps } from '@ajna-ui/form-input'
import React, { forwardRef } from 'react'

export const FormNumberField = forwardRef<HTMLInputElement, FormInputProps>(
  (props, _ref) => <FormInput type="number" defaultValue={0} {...props} />
)
