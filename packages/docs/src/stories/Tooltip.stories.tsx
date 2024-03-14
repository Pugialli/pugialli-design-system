import { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Text,
  TooltipContent,
  TooltipContentProps,
  TooltipProvider,
  TooltipTrigger,
} from '@pugialli-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: TooltipContent,
  args: {
    content: 'Isso é um tooltip',
  },

  decorators: [
    (Story) => {
      return (
        <TooltipProvider>
          <TooltipTrigger>
            <Box css={{ width: '$4', color: '$white' }}>
              <Text>21</Text>
            </Box>
          </TooltipTrigger>
          <Story />
        </TooltipProvider>
      )
    },
  ],
} as Meta<TooltipContentProps>

export const Primary: StoryObj<TooltipContentProps> = {}
