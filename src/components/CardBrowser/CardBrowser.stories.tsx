import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { CardBrowser, CardBrowserProps } from './CardBrowser'
import ImageCard from '../imageCard'
import img from '../../static/images/cat1.jpg'

export default {
  title: 'Components/cards',
  component: CardBrowser,
} as Meta

const Template: Story<CardBrowserProps> = (args) => <CardBrowser {...args} />

const title = 'Title 1'
const text = 'Text 1 lo asdad asd asd as das da ad adsasda'
const href = '/'
const cards = [
  <ImageCard title={title} text={text} href={href} img={img} key="1"/>,
  <ImageCard title={title} text={text} href={href} img={img} key="2"/>,
  <ImageCard title={title} text={text} href={href} img={img} key="3"/>,
  <ImageCard title={title} text={text} href={href} img={img} key="4"/>,
  <ImageCard title={title} text={text} href={href} img={img} key="5"/>,
  <ImageCard title={title} text={text} href={href} img={img} key="6"/>,
  <ImageCard title={title} text={text} href={href} img={img} key="7"/>,
  <ImageCard title={title} text={text} href={href} img={img} key="8"/>,
]

export const CardBrowser_1 = Template.bind({})
CardBrowser_1.args = {
  cards: cards,
}
