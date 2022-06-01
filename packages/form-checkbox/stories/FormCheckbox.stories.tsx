import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormCheckbox } from '../src/FormCheckbox'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FormCheckbox',
  component: FormCheckbox,
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
} as ComponentMeta<typeof FormCheckbox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormCheckbox> = (args) => (
  <FormCheckbox {...args} />
)

export const Main = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Main.args = {
  name: 'enabled',
  label: 'Enabled',
  subText: '',
  isRequired: false,
}
