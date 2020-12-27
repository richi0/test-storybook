import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { HorizontalCard, HorizontalCardProps } from './HorizontalCard'
import img1 from '../../static/images/p1.jpg'
import img2 from '../../static/images/p5.jpg'

export default {
  title: 'Components/Horizontal Card',
  component: HorizontalCard,
} as Meta

const Template: Story<HorizontalCardProps> = (args) => <HorizontalCard {...args} />

const long_text = `Another notable feature is the use of\
                  a virtual Document Object Model, or virtual DOM.\
                  React creates an in-memory data-structure cache,\
                  computes the resulting differences, and then updates\
                  the browser's displayed DOM efficiently.\
                  This process is called reconciliation. This allows the\
                  programmer to write code as if the entire page is rendered\
                  on each change, while the React libraries only render\
                  subcomponents that actually change. This selective\
                 rendering provides a major performance boost.`

export const HorizontalCard_1 = Template.bind({})
HorizontalCard_1.args = {
  title: "Virtual DOM",
  text: long_text,
  img: img1
}

const short_text = `The name cascading comes from the specified\
                    priority scheme to determine which style rule\
                    applies if more than one rule matches a particular\
                    element. This cascading priority scheme is predictable.`

export const HorizontalCard_2 = Template.bind({})
HorizontalCard_2.args = {
  title: "Shot text",
  text: short_text,
  img: img2
}

export const HorizontalCard_3 = Template.bind({})
HorizontalCard_3.args = {
  title: "Shot text",
  text: short_text,
  img: img1
}