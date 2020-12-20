import { render, screen } from '@testing-library/react'
import { Mobilenav } from './Mobilenav'

test('renders button label', () => {
  const { container } = render(
    <Mobilenav
      show={true}
      links={[
        { href: 'hello', text: 'yes' },
        { href: 'hello', text: 'yes' },
        { href: 'hello', text: 'yes' },
      ]}
    />,
  )
  screen.findByText('hello').then((text) => expect(text).toBeInTheDocument())
})
