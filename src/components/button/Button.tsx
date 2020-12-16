import React from 'react'
import './Button.css'

export interface ButtonProps {
  /**
   * Button contents
   */
  label: string
  /**
   * Click handler
   */
  onClick: () => void
  /**
   * What background color to use
   */
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
      <button className="m-6">{props.label}</button>
  )
}
