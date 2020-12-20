import React from 'react'
import './Link.css'

export interface LinkProps {
  /**
   * Text of the link
   */
  text: string
  /**
   * Href of the link
   */
  href: string
}

export const Link: React.FC<LinkProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="text-xl text-blue-600 hover:text-blue-900 duration-500 visited:text-purple-600 active:text-black"
    >
      {text.toUpperCase()}
    </a>
  )
}
