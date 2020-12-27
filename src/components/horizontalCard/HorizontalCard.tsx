import React from 'react'
import './HorizontalCard.css'
import Button from '../button'
import { PRIMARY } from '../../globals'

export interface HorizontalCardProps {
  /**
   * Title of the card
   */
  title: string
  /**
   * Text of the card
   */
  text: string
  /**
   * Image of the card
   */
  img: string
  /**
   * Image on right side?
   */
  right?: boolean
}

export const HorizontalCard: React.FC<HorizontalCardProps> = ({
  title,
  text,
  img,
  right = false,
}) => {
  return (
    <div className="sm:grid sm:grid-cols-2 shadow-lg">
      <div className={`${right ? 'order-1' : 'order-0'} flex flex-wrap justify-center content-center`}>
        <img className="sm:object-scale-down max-h-72" src={img} alt={title} />
      </div>
      <div className="p-3 flex flex-col">
        <div className="mb-auto">
          <div className={`text-2xl text-${PRIMARY()} mb-3`}>{title}</div>
          <div>{text}</div>
        </div>
        <div className="mt-2">
          <Button label="Learn more" onClick={() => console.log('a')} />
        </div>
      </div>
    </div>
  )
}
