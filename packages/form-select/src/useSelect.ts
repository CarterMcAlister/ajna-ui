import { useMemo } from 'react'
import { type ControllerRenderProps, type FieldValues } from 'react-hook-form'

export type SelectItemType = { label: string; value: any; [x: string]: any }
export type SelectType = SelectItemType[]
// export type SelectType = SelectItemType[] | string[]

export interface UseSelectParams
  extends ControllerRenderProps<FieldValues, any> {
  options: SelectType
  value: SelectType | string
  isMulti?: boolean
}

const isObject = (value: any) =>
  value != null && typeof value == 'object' && !Array.isArray(value)

export const useSelect = ({
  onChange,
  value,
  options,
  isMulti,
  ...props
}: UseSelectParams) => {
  // const formattedOptions: SelectType = useMemo(() => {
  //   if (!options || isObject(options[0])) {
  //     return options as SelectType
  //   }

  //   return options?.map((option) => ({ label: option, value: option }))
  // }, [options])

  const getValueLabel = (value: any) =>
    options.find((option) => option?.value === value)?.label

  const formattedValues: SelectType | SelectItemType = useMemo(() => {
    if (!value || isObject(value[0])) {
      return value as SelectType
    }
    if (Array.isArray(value)) {
      return value?.map((value) => ({
        label: getValueLabel(value) || value,
        value,
      })) as SelectType
    }
    return { label: getValueLabel(value) || value, value }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const onChangeMulti = (val: any) =>
    onChange(val.map((item: any) => item.value || item))
  const onChangeSingle = (val: any) => onChange(val.value || val)

  return {
    ...props,
    onChange: isMulti ? onChangeMulti : onChangeSingle,
    // options: formattedOptions,
    options,
    value: formattedValues,
  }
}
