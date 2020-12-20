import React, { useState } from 'react'
import './BurgerMenu.css'

export interface BurgerMenuProps {
  /**
   * Click handler
   */
  onClick: () => void
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClick }) => {
  const [spin, setSpin] = useState('')
  const rotate = () => {
    setSpin(spin ? '' : 'burger')
    setTimeout(() => setSpin(''), 1000)
    console.log('rotate')
  }
  return (
    <button
      className={`focus:outline-none ${spin} h-auto`}
      onClick={() => {
        rotate()
        onClick()
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 30"
      >
        <line x1="0" y1="0" x2="50" y2="0" stroke="black" strokeWidth="2" />
        <line x1="0" y1="15" x2="50" y2="15" stroke="black" strokeWidth="2" />
        <line x1="0" y1="30" x2="50" y2="30" stroke="black" strokeWidth="2" />
      </svg>
    </button>
  )
}
