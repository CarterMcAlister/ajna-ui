import type { BoxProps } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { ReactNode, useState } from 'react'
import {
  FormProvider,
  useForm,
  UseFormProps,
  UseFormReturn
} from 'react-hook-form'
import { z } from 'zod'

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<BoxProps, 'onSubmit'> {
  /** All your form fields */
  children?: ReactNode
  /** Text to display in the submit button */
  submitText?: string
  schema?: S
  onSubmit: (
    values: z.infer<S>,
    ctx: UseFormReturn<z.TypeOf<S>>
  ) => Promise<void | OnSubmitResult>
  // initialValues?: UseFormOptions<z.infer<S>>['defaultValues']
  initialValues?: UseFormProps<z.infer<S>>['defaultValues']
}

export type OnSubmitResult ={
      FORM_ERROR?: string
      [prop: string]: any
    }

export const FORM_ERROR = 'FORM_ERROR'

export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  schema,
  initialValues,
  onSubmit,
  ...props
}: FormProps<S>) {
  const ctx = useForm<z.infer<S>>({
    mode: 'onBlur',
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues: initialValues,
  })
  const [formError, setFormError] = useState<string | null>(null)

  return (
    <FormProvider {...ctx}>
      <Box
        as="form"
        onSubmit={async (event) => {
          event.preventDefault()
          event.stopPropagation()

          return ctx.handleSubmit(async (values) => {
            const result = (await onSubmit(values, ctx)) || {}
            for (const [key, value] of Object.entries(result)) {
              if (key === FORM_ERROR) {
                setFormError(value)
              } else {
                ctx.setError(key as any, {
                  type: 'submit',
                  message: value,
                })
              }
            }
          })(event)
        }}
        onReset={() => {
          setFormError(null)
        }}
        {...props}
      >
        {/* Form fields supplied as children are rendered here */}
        {children}

        {formError && (
          <Box role="alert" color="red.500" pt="4">
            {formError}
          </Box>
        )}
      </Box>
    </FormProvider>
  )
}
