import React, { useState } from 'react'
import './ImageCard.css'
import { PRIMARY } from '../../globals'

export interface ImageCardProps {
  /**
   * Image title
   */
  title: string
  /**
   * Image text
   */
  text: string
  /**
   * Image path
   */
  img: string
  /**
   * Link to details
   */
  href: string
}

export const ImageCard: React.FC<ImageCardProps> = ({
  title,
  text,
  img,
  href,
}) => {
  const [style, setStyle] = useState('')
  const enter = () => {
    setStyle('none')
  }
  const leave = () => {
    setStyle('')
  }

  return (
    <a
      href={href}
      onMouseEnter={() => enter()}
      onMouseLeave={() => leave()}
      className="h-full w-full relative"
    >
      <img src={img} alt="img"/>
      <div
        style={{ display: style }}
        className="w-full h-full absolute top-0 left-0 flex flex-wrap justify-center content-center"
      >
        <div className="text-xl text-white text-center">
        {title}
        </div>
      </div>
      <div
        className={`w-full h-full opacity-0 duration-500 hover:opacity-80 absolute top-0 left-0 bg-${PRIMARY()} flex flex-wrap justify-center content-center p-2`}
      >
        <div className="text-xl text-white text-center">{text}</div>
      </div>
    </a>
  )
}
