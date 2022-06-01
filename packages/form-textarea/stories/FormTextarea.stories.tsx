import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormTextarea } from '../src'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FormTextarea',
  component: FormTextarea,
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
} as ComponentMeta<typeof FormTextarea>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormTextarea> = (args) => (
  <FormTextarea {...args} />
)

export const Main = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Main.args = {
  label: 'Text',
  name: 'text',
  isRequired: false,
  subText: '',
}
