import { render } from '@testing-library/react'
import { Link } from './Link'

test('renders button label', () => {
  const {container} = render(<Link href="www.test1.ch" text="test1" />)
  const a = container.querySelector('a')
  expect(a).toBeInTheDocument()
})
