import React from 'react'
import './Link.css'
import { PRIMARY, SECONDARY } from '../../globals'

export interface LinkProps {
  /**
   * Text of the link
   */
  text: string
  /**
   * Href of the link
   */
  href: string
  /**
   * Link is active / You are on the page the link links to.
   */
  active?: boolean
}

export const Link: React.FC<LinkProps> = ({ href, text, active }) => {
  return (
    <a
      href={href}
      className={`text-xl text-${SECONDARY()} hover:text-${PRIMARY()} hover:underline duration-250 visited:text-purple-600 active:text-black ${
        active ? `underline text-${PRIMARY()}` : ''
      }`}
    >
      {text.toUpperCase()}
    </a>
  )
}
