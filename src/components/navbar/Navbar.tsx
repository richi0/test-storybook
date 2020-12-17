import React, { useState } from 'react'
import { Link, LinkProps } from '../link/Link'
import BurgerMenu from '../burgerMenu'
import './Navbar.css'

export interface NavbarProps {
  /**
   * Brand name
   */
  brand: string
  /**
   * Navigation links
   */
  link: LinkProps[]
  /**
   * What background color to use
   */
}

export const Navbar: React.FC<NavbarProps> = ({ brand, link }) => {
  const [showMobileNav, setMobileNav] = useState(false)

  const clickBurger = () => {
    setMobileNav(showMobileNav ? false : true)
  }

  return (
    <div className="bg-gray-200 flex flex-row gap-5 p-3 items-center">
      <div className="text-3xl">{brand}</div>
      <div className="mr-auto"></div>
      {link.map((link, key) => (
        <div className="hidden sm:block" key={key}>
          <Link text={link.text} href={link.href} />
        </div>
      ))}
      <div className="sm:hidden flex items-center">
        <BurgerMenu onClick={() => clickBurger()} />
      </div>
      <div className={showMobileNav ? '' : 'hidden'}>asdadad</div>
    </div>
  )
}
