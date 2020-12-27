import { render } from '@testing-library/react'
import { CardBrowser } from './CardBrowser'
import ImageCard from '../imageCard'
import img from '../../static/images/cat1.jpg'

window.scrollTo = jest.fn();

test('render CardBrowser', () => {
  const {container} = render(<CardBrowser cards={[<ImageCard title="test1" text="text2" href="/" img={img} key="1"/>]}/>)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
