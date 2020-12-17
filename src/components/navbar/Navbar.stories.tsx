import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Navbar, NavbarProps } from './Navbar'

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />

export const Navbar_1 = Template.bind({})
Navbar_1.args = {
  brand: 'Google',
  link: [
    { href: 'www.test1.ch', text: 'Products' },
    { href: 'www.test1.ch', text: 'About' },
  ],
}

export const Navbar_2 = Template.bind({})
Navbar_2.args = {
  brand: 'Amazon',
  link: [
    { href: 'www.test1.ch', text: 'Products' },
    { href: 'www.test1.ch', text: 'Projects' },
    { href: 'www.test1.ch', text: 'Team' },
    { href: 'www.test1.ch', text: 'Contact' },
    { href: 'www.test1.ch', text: 'About' },
  ],
}
