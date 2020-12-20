import { render } from '@testing-library/react'
import { Button } from './Button'

test('renders button label', () => {
  const {container} = render(<Button label="richie" onClick={() => null} />)
  const button = container.querySelector('button')
  expect(button).toBeInTheDocument()
})
