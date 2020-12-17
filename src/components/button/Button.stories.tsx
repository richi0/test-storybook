import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary',
  mode: 'primary',
  onClick: () => console.log("aaa"),
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary',
  mode: 'secondary',
  onClick: () => console.log('aaa'),
}

export const Inactive = Template.bind({})
Inactive.args = {
  label: 'Inactive',
  mode: 'inactive',
  onClick: () => console.log('aaa'),
}
