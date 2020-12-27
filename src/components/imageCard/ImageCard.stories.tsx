import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ImageCard, ImageCardProps } from './ImageCard'
import img1 from '../../static/images/p1.jpg'
import img2 from '../../static/images/p5.jpg'

export default {
  title: 'Components/Image Card',
  component: ImageCard,
} as Meta

const Template: Story<ImageCardProps> = (args) => <ImageCard {...args} />

export const ImageCard_1 = Template.bind({})
ImageCard_1.args = {
  title: 'Super Image',
  text: 'This text is shown when you hover over the image',
  img: img1,
  href: '/',
}

export const ImageCard_2 = Template.bind({})
ImageCard_2.args = {
  title: 'Super Image',
  text: 'This text is shown when you hover over the image',
  img: img2,
  href: '/',
}