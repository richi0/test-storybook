import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { CardBrowser, CardBrowserProps } from './CardBrowser'
import ImageCard from '../imageCard'
import TextCard from '../textCard'
import img1 from '../../static/images/p1.jpg'
import img2 from '../../static/images/p2.jpg'
import img3 from '../../static/images/p3.jpg'
import img4 from '../../static/images/p4.jpg'
import img5 from '../../static/images/p5.jpg'
import img6 from '../../static/images/p6.jpg'
import img7 from '../../static/images/p7.jpg'
import img8 from '../../static/images/p8.jpg'

export default {
  title: 'Components/Card Browser',
  component: CardBrowser,
} as Meta

const Template: Story<CardBrowserProps> = (args) => <CardBrowser {...args} />

const text = 'This is a longer text'
const href = '/'
const cards = [
  <ImageCard title={'Title 1'} text={text} href={href} img={img1} key="1" />,
  <ImageCard title={'Title 2'} text={text} href={href} img={img2} key="2" />,
  <ImageCard title={'Title 3'} text={text} href={href} img={img3} key="3" />,
  <ImageCard title={'Title 4'} text={text} href={href} img={img4} key="4" />,
  <ImageCard title={'Title 5'} text={text} href={href} img={img5} key="5" />,
  <ImageCard title={'Title 6'} text={text} href={href} img={img6} key="6" />,
  <ImageCard title={'Title 7'} text={text} href={href} img={img7} key="7" />,
  <ImageCard title={'Title 8'} text={text} href={href} img={img8} key="8" />,
]

export const CardBrowser_1 = Template.bind({})
CardBrowser_1.args = {
  cards: cards,
}

const longText = `Sir Timothy John Berners-Lee (born 8 June 1955), also known as TimBL,\
                  is an English computer scientist best known as the inventor\
                  of the World Wide Web. He is a Professorial Fellow of Computer\
                  Science at the University of Oxford and a professor at the Massachusetts\
                  Institute of Technology (MIT). Berners-Lee proposed an information\
                  management system on 12 March 1989, then implemented the first successful\
                  communication between a Hypertext Transfer Protocol (HTTP) client and server\
                  via the Internet in mid-November.`

const textCards = [
  <TextCard title="Title 1" body={longText} href="/" />,
  <TextCard title="Title 1" body={longText} href="/" />,
  <TextCard title="Title 1" body="This is the body text" href="/" img={img1} />,
  <TextCard title="Title 1" body={longText} href="/" img={img1} />,
  <TextCard title="Title 1" body="This is the body text" href="/" img={img1} />,
]

export const CardBrowser_2 = Template.bind({})
CardBrowser_2.args = {
  cards: textCards,
}
