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
  link: ["link1", "link2"]
}

export const Navbar_2 = Template.bind({})
Navbar_2.args = {
  brand: 'Amazon',
  link: ["link3", "link2"]
}
