import { render } from '@testing-library/react'
import { ImageCard } from './ImageCard'

test('render ImageCard', () => {
  const {container} = render(<ImageCard title="prop1" text="text" img="image_path" href="/"/>)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
