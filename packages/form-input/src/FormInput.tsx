import { FormItem, type DefaultFormItemProps } from '@ajna-ui/form-item'
import { useMergeRefs } from '@chakra-ui/hooks'
import { Input, InputGroup, type InputProps } from '@chakra-ui/input'
import { useColorModeValue, useToken } from '@chakra-ui/system'
import React, { forwardRef, type PropsWithoutRef } from 'react'
import { useFormContext } from 'react-hook-form'

// todo: convert to interface
export type FormInputProps = DefaultFormItemProps &
  PropsWithoutRef<InputProps> & {
    children?: React.ReactNode
  }

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      name,
      label,
      subText,
      isRequired = false,
      outerProps,
      labelProps,
      type,
      children,
      ...props
    },
    ref
  ) => {
    const {
      register,
      formState: { isSubmitting },
    } = useFormContext()
    const [lightBg] = useToken('colors', ['white'])
    const bgColor = useColorModeValue(lightBg, 'transparent')

    const { ref: formItemRef, ...formItemProps } = register(name, {
      valueAsNumber: type === 'number',
    })

    const combinedRefs = useMergeRefs(ref, formItemRef)

    return (
      <FormItem
        name={name}
        label={label}
        isRequired={isRequired}
        subText={subText}
        {...outerProps}
        labelProps={labelProps}
      >
        <InputGroup>
          {children}
          <Input
            isDisabled={isSubmitting}
            bg={bgColor}
            type={type}
            {...props}
            {...formItemProps}
            ref={combinedRefs}
          />
        </InputGroup>
      </FormItem>
    )
  }
)
