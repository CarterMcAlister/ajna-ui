import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormSelectCreatable } from '../src'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FormSelectCreatable',
  component: FormSelectCreatable,
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
} as ComponentMeta<typeof FormSelectCreatable>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormSelectCreatable> = (args) => (
  <FormSelectCreatable {...args} />
)

export const Single = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Single.args = {
  name: 'text',
  label: 'Text',
  subText: '',
  isRequired: false,
  isMulti: false,
  options: [
    { label: 'Option one', value: 'one' },
    { label: 'Option two', value: 'two' },
    { label: 'Option three', value: 'three' },
  ],
}

export const Multi = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Multi.args = {
  name: 'text',
  label: 'Text',
  subText: '',
  isRequired: false,
  options: [
    { label: 'Option one', value: 'one' },
    { label: 'Option two', value: 'two' },
    { label: 'Option three', value: 'three' },
  ],
  isMulti: true,
}
