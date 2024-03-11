import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ejc-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {},

  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    alt: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {
    src: 'https://github.com/pugialli.png',
    alt: 'João Paulo Pugialli',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
