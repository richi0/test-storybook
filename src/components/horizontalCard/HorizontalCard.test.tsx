import { render } from '@testing-library/react'
import { HorizontalCard } from './HorizontalCard'

test('render HorizontalCard', () => {
  const {container} = render(<HorizontalCard title="Title" text="text" img="img"/>)
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
