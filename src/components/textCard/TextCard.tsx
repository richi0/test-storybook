import React from 'react'
import './TextCard.css'
import { PRIMARY } from '../../globals'

export interface TextCardProps {
  /**
   * Title of the card
   */
  title: string
  /**
   * Image of the card
   */
  img?: string
  /**
   * Main text of the card
   */
  body: string
  /**
   * Url to the details
   */
  href?: string
}

export const TextCard: React.FC<TextCardProps> = ({
  title,
  img,
  body,
  href,
}) => {
  const hover = 'hover:shadow-xl duration-500 transform hover:-translate-y-1'
  const base = (
    <div
      className={`min-w-min min-h-full max-w-md shadow-md bg-white p-5 ${
        href ? hover : ''
      }`}
    >
      <div className={`text-${PRIMARY()} text-3xl mb-10 underline`}>
        {title}
      </div>
      {img ? (
          <img className="mb-3 mx-auto" src={img} alt=""/>
      ) : null}
      <div>{body}</div>
    </div>
  )
  if (href) {
    return <a href={href}>{base}</a>
  } else {
    return base
  }
}
