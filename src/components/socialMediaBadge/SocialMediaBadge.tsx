import React from 'react'
import twitter from '../../static/images/twitter.svg'
import facebook from '../../static/images/facebook.svg'
import instagram from '../../static/images/instagram.svg'
import youtube from '../../static/images/youtube.svg'
import linkedin from '../../static/images/linkedin.svg'

export interface SocialMediaBadgeProps {
  /**
   * Choose the type of social media
   */
  option: 'twitter' | 'facebook' | 'instagram' | 'youtube' | 'linkedin'
  /**
   * Link to your social media page
   */
  href: string
}

export const SocialMediaBadge: React.FC<SocialMediaBadgeProps> = ({
  option,
  href
}) => {
  let img = ''
  if (option === 'twitter') {
    img = twitter
  } else if (option === 'facebook') {
    img = facebook
  } else if (option === 'instagram') {
    img = instagram
  } else if (option === 'youtube') {
    img = youtube
  } else if (option === 'linkedin') {
    img = linkedin
  }
  return (
    <a href={href} >
      <img className="w-16 h-16" src={img} alt={option} />
    </a>
  )
}
