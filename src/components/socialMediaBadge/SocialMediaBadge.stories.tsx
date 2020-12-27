import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { SocialMediaBadge, SocialMediaBadgeProps } from './SocialMediaBadge'

export default {
  title: 'Components/Badges',
  component: SocialMediaBadge,
} as Meta

const Template: Story<SocialMediaBadgeProps> = (args) => (
  <SocialMediaBadge {...args} />
)

export const Twitter_Badge = Template.bind({})
Twitter_Badge.args = {
  option: 'twitter',
  href: 'https://twitter.com',
}

export const Facebook_Badge = Template.bind({})
Facebook_Badge.args = {
  option: 'facebook',
  href: 'https://facebook.com',
}

export const Instagram_Badge = Template.bind({})
Instagram_Badge.args = {
  option: 'instagram',
  href: 'https://instagram.com',
}

export const Youtube_Badge = Template.bind({})
Youtube_Badge.args = {
  option: 'youtube',
  href: 'https://youtube.com',
}

export const Linkedin_Badge = Template.bind({})
Linkedin_Badge.args = {
  option: 'linkedin',
  href: 'https://linkedin.com',
}