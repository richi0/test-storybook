import React, { useState } from 'react'
import { Link, LinkProps } from '../link/Link'
import BurgerMenu from '../burgerMenu'
import Mobilenav from '../mobilenav'
import './Navbar.css'

export interface NavbarProps {
  /**
   * Brand name
   */
  brand: string
  /**
   * Navigation links
   */
  links: LinkProps[]
}

export const Navbar: React.FC<NavbarProps> = ({ brand, links }) => {
  const [showMobileNav, setMobileNav] = useState(false)

  const clickBurger = () => {
    setMobileNav(showMobileNav ? false : true)
  }

  return (
    <div className="bg-gray-200 flex flex-row gap-5 p-3 items-center">
      <div className="text-3xl">{brand}</div>
      <div className="mr-auto"></div>
      {links.map((link, key) => (
        <div className="hidden sm:block" key={key}>
          <Link text={link.text} href={link.href} />
        </div>
      ))}
      <div className="sm:hidden flex items-center">
        <BurgerMenu onClick={() => clickBurger()} />
      </div>
      <Mobilenav
        show={showMobileNav}
        links={links}
        toggleShowMenu={() => clickBurger()}
      />
    </div>
  )
}
