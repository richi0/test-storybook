import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

test('renders button label', () => {
  render(
    <Navbar brand="richie" link={[{href:"www.test1.com", text:"test1"}]} />,
  )
  const link = screen.getByText("test1")
  expect(link).toBeInTheDocument()
})
