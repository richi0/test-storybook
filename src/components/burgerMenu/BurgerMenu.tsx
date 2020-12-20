import React from 'react'
import './BurgerMenu.css'

export interface BurgerMenuProps {
  /**
   * Click handler
   */
  onClick: () => void
}
const stripe = (key: number) => (
  <div className="bg-black w-7 h-1 m-1" key={key}></div>
)

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClick }) => {
  return (
    <button className="items-center" onClick={() => onClick()}>
      {[stripe(1), stripe(2), stripe(3)]}
    </button>
  )
}
