import React, { useState, useEffect } from 'react'
import './CardBrowser.css'
import { PRIMARY } from '../../globals'

export interface CardBrowserProps {
  /**
   * Array of cards
   */
  cards: React.ReactNode[]
}

export const CardBrowser: React.FC<CardBrowserProps> = ({ cards }) => {
  const [cardNumber, setCardNumber] = useState(0)

  const changeCard = async (n: number) => {
    if (n === 1 && cardNumber < cards.length - 1) {
      setCardNumber(cardNumber + 1)
    }
    if (n === -1 && cardNumber > 0) {
      setCardNumber(cardNumber - 1)
    }
  }

  useEffect(() => {
      window.location.href=`#card-${cardNumber}`
  }, [cardNumber])

  return (
    <div>
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5">
        {cards.map((card) => card)}
      </div>
      <div className="sm:hidden">
        <div className="flex content-center cc-CardBrowser">
          {cards.map((card, index) => (
            <div id={`card-${index}`} className="min-w-full flex flex-wrap justify-center content-center cc-CardBrowserAnchor">
              {card}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between content-center mt-8">
          <button
            className={`focus:outline-none transition duration-500 transform  ${
              cardNumber === 0 ? '' : 'hover:-translate-x-2'
            }`}
            onClick={() => changeCard(-1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="-25 -25 50 50"
              className={`text-black stroke-current  ${
                cardNumber === 0 ? 'text-gray-300' : `hover:text-${PRIMARY()}`
              }`}
            >
              <line x1="-10" y1="0" x2="10" y2="-20" />
              <line x1="-10" y1="0" x2="10" y2="20" />
            </svg>
          </button>
          <div className="flex flex-wrap justify-center content-center">{`${
            cardNumber + 1
          } of ${cards.length}`}</div>
          <button
            className={`focus:outline-none transition duration-500 transform  ${
              cards.length - 1 === cardNumber ? '' : 'hover:translate-x-2'
            }`}
            onClick={() => changeCard(1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="-25 -25 50 50"
              className={`text-black stroke-current  ${
                cards.length - 1 === cardNumber
                  ? 'text-gray-300'
                  : `hover:text-${PRIMARY()}`
              }`}
            >
              <line x1="10" y1="0" x2="-10" y2="-20" />
              <line x1="10" y1="0" x2="-10" y2="20" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
