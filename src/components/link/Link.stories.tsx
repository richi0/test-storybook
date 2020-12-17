import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Link, LinkProps } from './Link'

export default {
  title: 'Components/Link',
  component: Link,
} as Meta

const Template: Story<LinkProps> = (args) => <Link {...args} />

export const MainLink = Template.bind({})
MainLink.args = {
  href: 'www.test1.ch',
  text: 'Test1',
}