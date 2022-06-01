import { useFormContext } from 'react-hook-form'

export const useFormError = (name: string) => {
  const {
    formState: { errors },
  } = useFormContext()

  const error = resolve(name, errors)

  return error
}

function resolve(path, obj) {
  return path.split('.').reduce(function (prev, curr) {
    return prev ? prev[curr] : null
  }, obj || self)
}
