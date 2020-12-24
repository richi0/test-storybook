import React from 'react'
import './Button.css'
import { PRIMARY, SECONDARY } from '../../globals'

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
  let COLOR: string = ''
  if (mode === 'primary' || mode === undefined) {
    COLOR = PRIMARY().split('-')[0]
  } else if (mode === 'secondary') {
    COLOR = SECONDARY().split('-')[0]
  } else if (mode === 'inactive') {
    COLOR = 'gray'
  }
  const BASE_STYLE: string = `bg-${COLOR}-600 rounded-lg p-3 shadow-lg\
                              focus:outline-none focus:ring focus:ring-offset-2\
                              focus:ring-${COLOR}-400`
  const HOVER_STYLE: string = `transition duration-500 transform\
                              hover:-translate-y-1 hover:shadow-xl\
                              hover:bg-${COLOR}-400`
  const STYLE = `${BASE_STYLE} ${mode === 'inactive' ? '' : HOVER_STYLE}`
  return (
    <button
      className={STYLE}
      onClick={onClick}
      disabled={mode === 'inactive' ? true : false}
    >
      <b>{label}</b>
    </button>
  )
}
