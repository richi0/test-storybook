import React from 'react'
import './Navbar.css'

export interface NavbarProps {
  /**
   * Brand name
   */
  brand: string
  /**
   * Navigation links
   */
  link: string[]
  /**
   * What background color to use
   */
}

export const Navbar: React.FC<NavbarProps> = ({brand, link}) => {
  return (
      <div className="bg-yellow-400">
          <h1 className="bg-red-500">{brand}</h1>
          <p className="text-5xl">test11</p>
          {link.map((link, key) => <p key={key}>{link}</p>)}
      </div>
  )
}
