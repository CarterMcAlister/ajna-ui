import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { MarkdownMenuBar } from '../src'
import { FormMarkdownEditor } from '../src/FormMarkdownEditor'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FormMarkdownEditor',
  component: FormMarkdownEditor,
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
} as ComponentMeta<typeof FormMarkdownEditor>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormMarkdownEditor> = (args) => (
  <FormMarkdownEditor {...args}>
    <MarkdownMenuBar />
  </FormMarkdownEditor>
)

export const Main = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Main.args = {
  name: 'text',
  label: 'Text',
  subText: '',
  isRequired: false,
}
