import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormSubmitButton } from '../src'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FormSubmitButton',
  component: FormSubmitButton,
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
} as ComponentMeta<typeof FormSubmitButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormSubmitButton> = (args) => (
  <FormSubmitButton {...args} />
)

export const Main = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Main.args = {
  children: 'Submit',
}
