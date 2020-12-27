import { render } from '@testing-library/react'
import { SocialMediaBadge } from './SocialMediaBadge'

test('render SocialMediaBadge', () => {
  const {container} = render(<SocialMediaBadge option="twitter" href="/"/>)
  const a = container.querySelector('a')
  expect(a).toBeInTheDocument()
})
