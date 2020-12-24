import React, { useState } from 'react'
import { PRIMARY } from '../../globals'
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
    setSpin(spin ? '' : 'cc-BurgerMenu')
    setTimeout(() => {
      setSpin('')
      onClick()
    }, 1000)
    console.log('rotate')
  }
  return (
    <button
      className={`focus:outline-none ${spin} h-auto`}
      onClick={() => {
        rotate()
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 30"
        className={`text-black stroke-current hover:stroke-current hover:text-${PRIMARY()}`}
      >
        <line x1="0" y1="0" x2="50" y2="0" strokeWidth="2" />
        <line x1="0" y1="15" x2="50" y2="15" strokeWidth="2" />
        <line x1="0" y1="30" x2="50" y2="30" strokeWidth="2" />
      </svg>
    </button>
  )
}
