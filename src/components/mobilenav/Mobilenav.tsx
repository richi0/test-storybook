import React, { useState, useEffect } from 'react'
import { Link, LinkProps } from '../link/Link'

export interface MobilenavProps {
  /**
   * Show or hide the navigation
   */
  show: boolean
  /**
   * Navigation links
   */
  links: LinkProps[]
  /**
   * Toggle between show the menu on and off
   */
  toggleShowMenu: () => void
}

export const Mobilenav: React.FC<MobilenavProps> = ({
  show,
  links,
  toggleShowMenu,
}) => {
  const [style, setStyle] = useState({ top: '-100%' })

  useEffect(() => {
    if (show) {
      setStyle({ top: '0px' })
    } else {
      setStyle({ top: '-100%' })
    }
  }, [show])

  return (
    <div
      style={style}
      className={`w-full z-50 bg-gray-100 absolute top-0 left-0 duration-700`}
    >
      <div className="w-full text-right">
        <button
          className="text-5xl m-4 focus:outline-none"
          onClick={toggleShowMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="-25 -25 50 50"
          >
            <circle cx="0" cy="0" r="20" stroke="gray" fill="#F3F4F6" />
            <line x1="-10" y1="-10" x2="10" y2="10" stroke="gray" />
            <line x1="-10" y1="10" x2="10" y2="-10" stroke="gray" />
          </svg>
        </button>
      </div>
      {links.map((link, key) => (
        <div className="text-center py-3 w-10/12 container mx-auto" key={key}>
          <Link href={link.href} text={link.text} />
          <hr className="border-t-2 border-gray-500 mt-2" />
        </div>
      ))}
    </div>
  )
}
