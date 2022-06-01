import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormInput } from '../src/FormInput'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FormInput',
  component: FormInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      options: ['number', 'text', 'password', 'email'],
      control: { type: 'select' },
    },
  },
  decorators: [
    (Story) => {
      const ctx = useForm({})
      return (
        <FormProvider {...ctx}>
          <Story />
        </FormProvider>
      )
    },
  ],
} as ComponentMeta<typeof FormInput>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormInput> = (args) => (
  <FormInput {...args} />
)

export const Main = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Main.args = {
  name: 'email',
  label: 'Email address',
  subText: '',
  isRequired: false,
  type: 'text',
}
