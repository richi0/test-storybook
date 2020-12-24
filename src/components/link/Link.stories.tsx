import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Link, LinkProps } from './Link'

export default {
  title: 'Components/Link',
  component: Link,
} as Meta

const Template: Story<LinkProps> = (args) => <Link {...args} />

export const ActiveLink = Template.bind({})
ActiveLink.args = {
  href: '/',
  text: 'This link is active',
  active: true,
}

export const InactiveLink = Template.bind({})
InactiveLink.args = {
  href: '/',
  text: 'This link is inactive',
}