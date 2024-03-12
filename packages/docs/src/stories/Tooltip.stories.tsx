import { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  TooltipContent,
  TooltipContentProps,
  TooltipProvider,
  TooltipTrigger,
} from '@pugialli-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: TooltipContent,
  args: {
    content: 'Isso é um tooltip',
  },

  decorators: [
    (Story) => {
      return (
        <TooltipProvider>
          <TooltipTrigger>
            <Box css={{ width: '$4', color: '$white' }}>21</Box>
          </TooltipTrigger>
          <Story />
        </TooltipProvider>
      )
    },
  ],
} as Meta<TooltipContentProps>

export const Primary: StoryObj<TooltipContentProps> = {}
