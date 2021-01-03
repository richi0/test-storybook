import React, { useState } from 'react'
import { Link, LinkProps } from '../link/Link'
import BurgerMenu from '../burgerMenu'
import Mobilenav from '../mobilenav'

export interface NavbarProps {
  /**
   * Path company logo
   */
  logo: string
  /**
   * Brand name
   */
  brand: string
  /**
   * Navigation links
   */
  links: LinkProps[]
}

export const Navbar: React.FC<NavbarProps> = ({ logo, brand, links }) => {
  const [showMobileNav, setMobileNav] = useState(false)

  const clickBurger = () => {
    setMobileNav(showMobileNav ? false : true)
  }

  return (
    <div className="bg-gray-200 flex flex-row gap-5 p-3 items-center">
      <a href="/">
        <img className="w-10 bg-none" src={logo} alt="logo" />
      </a>
      <div className="text-lg sm:text-3xl mr-auto">{brand}</div>
      {links.map((link, key) => (
        <div className="hidden sm:block" key={key}>
          <Link
            text={link.text}
            href={link.href}
            active={link.active ? true : false}
          />
        </div>
      ))}
      <div className="sm:hidden">
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
