import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ImageCard, ImageCardProps } from './ImageCard'
import img from '../../static/images/cat1.jpg'

export default {
  title: 'Components/cards',
  component: ImageCard,
} as Meta

const Template: Story<ImageCardProps> = (args) => <ImageCard {...args} />

export const ImageCard_1 = Template.bind({})
ImageCard_1.args = {
  title: 'Super Image',
  text: 'this is a longer text',
  img: img,
  href: '/',
}
