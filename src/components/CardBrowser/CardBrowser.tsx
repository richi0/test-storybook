import React from 'react'
import './CardBrowser.css'

export interface CardBrowserProps {
  /**
   * Array of cards
   */
  cards: React.ReactNode[]
}

export const CardBrowser: React.FC<CardBrowserProps> = ({ cards }) => {
  return (
    <div>
      <div className="hidden sm:grid grid-cols-3 gap-5">{cards.map((card) => card)}</div>
      <div className="sm:hidden">{cards.map((card) => card)}</div>
    </div>
  )
}
