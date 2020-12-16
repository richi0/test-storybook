import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

test('renders button label', () => {
  render(
    <Navbar brand="richie" link={['link1', 'link2']} />,
  )
  const link = screen.getByText("link1")
  expect(link).toBeInTheDocument()
})
