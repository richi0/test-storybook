import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Mobilenav, MobilenavProps } from './Mobilenav'

export default {
  title: 'Components/Navigation',
  component: Mobilenav,
} as Meta

const Template: Story<MobilenavProps> = (args) => <Mobilenav {...args} />
const links = [
  { href: 'www.example.com/home', text: 'home' },
  { href: 'www.example.com/projects', text: 'projects' },
  { href: 'www.example.com/about', text: 'about' },
  { href: 'www.example.com/contact', text: 'contact' },
]
export const ShowMobileNav = Template.bind({})
ShowMobileNav.args = {
  show: true,
  links: links,
}

export const HideMobileNav = Template.bind({})
HideMobileNav.args = {
  show: false,
  links: links,
}
