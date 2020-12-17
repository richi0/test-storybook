import React from 'react'
import './Button.css'

export interface ButtonProps {
  /**
   * Button lable
   */
  label: string
  /**
   * What background color to use
   */
  mode?: 'primary' | 'secondary' | 'inactive' | undefined
  /**
   * Click handler
   */
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, mode }) => {
  const BASE_STYLE: string =
    'rounded-lg p-3 duration-500 shadow-lg focus:outline-none focus:ring focus:ring-offset-2'
  let COLOR: string = ''
  if (mode === 'primary' || mode === undefined) {
    COLOR = 'green'
  } else if (mode === 'secondary') {
    COLOR = 'yellow'
  } else if (mode === 'inactive') {
    COLOR = 'gray'
  }
  const STYLE = `${BASE_STYLE} bg-${COLOR}-400 hover:bg-${COLOR}-600 focus:ring-${COLOR}-600`
  return (
    <button className={STYLE} onClick={onClick}>
      {label}
    </button>
  )
}
