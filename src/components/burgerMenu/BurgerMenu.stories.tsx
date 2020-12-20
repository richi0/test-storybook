import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { BurgerMenu, BurgerMenuProps } from './BurgerMenu'

export default {
  title: 'Components/Navigation',
  component: BurgerMenu,
} as Meta

const Template: Story<BurgerMenuProps> = (args) => <BurgerMenu {...args} />

export const Burger = Template.bind({})
Burger.args = {
  onClick: () => console.log("aaa"),
}
