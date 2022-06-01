import { Checkbox } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormCheckboxGroup } from '../src/FormCheckboxGroup'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FormCheckboxGroup',
  component: FormCheckboxGroup,
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
} as ComponentMeta<typeof FormCheckboxGroup>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormCheckboxGroup> = (args) => (
  <FormCheckboxGroup {...args}>
    <Checkbox value="naruto">Naruto</Checkbox>
    <Checkbox value="sasuke">Sasuke</Checkbox>
    <Checkbox value="kakashi">Kakashi</Checkbox>
  </FormCheckboxGroup>
)

export const Main = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Main.args = {
  name: 'characters',
  label: 'Characters',
  subText: '',
  isRequired: false,
}
