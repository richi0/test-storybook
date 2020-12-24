import { render, screen } from '@testing-library/react'
import { TextCard } from './TextCard'

test('renders TextCard', () => {
  const { container } = render(
    <TextCard title="My Title" body="hello" href="https://example.com" />,
  )
  const div = container.querySelector('div')
  expect(div).toBeInTheDocument()
})
