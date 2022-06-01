import { FormItem, type DefaultFormItemProps } from '@ajna-ui/form-item'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TiptapEditor, type TiptapEditorProps } from './TipTap'

export interface FormMarkdownEditorProps
  extends DefaultFormItemProps,
    TiptapEditorProps { }
    

export const FormMarkdownEditor = ({
  name,
  label,
  subText,
  outerProps,
  labelProps,
    isRequired,
  children,
  ...props
}: FormMarkdownEditorProps) => {
  const { control } = useFormContext()

  return (
    <FormItem
      name={name}
      label={label}
      subText={subText}
            isRequired={isRequired}

      {...outerProps}
      labelProps={labelProps}
    >
      <Controller
        name={name}
        control={control}
              render={({ field }) => <TiptapEditor {...field} {...props}>
            {children}
        </TiptapEditor>}
      />
    </FormItem>
  )
}
