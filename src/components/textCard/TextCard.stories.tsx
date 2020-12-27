import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { TextCard, TextCardProps } from './TextCard'
import img from '../../static/images/cat1.jpg'
import small_img from '../../static/images/small_img.png'

export default {
  title: 'Components/Text Card',
  component: TextCard,
} as Meta

const Template: Story<TextCardProps> = (args) => <TextCard {...args} />

const title = 'The Singularity Is Near'

const body = `The Singularity Is Near: When Humans Transcend Biology\
is a 2005 non-fiction book about artificial intelligence and the future of\
humanity by inventor and futurist Ray Kurzweil. The book builds on the ideas\
introduced in Kurzweil's previous books, The Age of Intelligent Machines\
(1990) and The Age of Spiritual Machines (1999). This time, however,\
Kurzweil embraces the term the Singularity, which was popularized by\
Vernor Vinge in his 1993 essay "The Coming Technological Singularity."`

export const CardWithLink = Template.bind({})
CardWithLink.args = {
  title: title,
  body: body,
  href: '/',
}

export const CardWithoutLink = Template.bind({})
CardWithoutLink.args = {
  title: title,
  body: body,
}

export const CardWithImage = Template.bind({})
CardWithImage.args = {
  title: title,
  body: body,
  img: img,
  href: '/',
}

export const CardWithSmallImage = Template.bind({})
CardWithSmallImage.args = {
  title: title,
  body: body,
  img: small_img,
  href: '/',
}