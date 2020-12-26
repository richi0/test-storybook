import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import logo from '../../static/images/logo.svg'
import { Navbar, NavbarProps } from './Navbar'

export default {
  title: 'Components/Navigation',
  component: Navbar,
} as Meta

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />

export const Navbar_1 = Template.bind({})
Navbar_1.args = {
  logo: logo,
  brand: 'Alta Engineering',
  links: [
    { href: '/', text: 'Products' },
    { href: '/', text: 'About' },
  ],
}

export const Navbar_2 = Template.bind({})
Navbar_2.args = {
  logo: logo,
  brand: 'Amazon',
  links: [
    { href: '/', text: 'Products' },
    { href: '/', text: 'Projects' },
    { href: '/', text: 'Team', active: true},
    { href: '/', text: 'Contact' },
    { href: '/', text: 'About' },
  ],
}
