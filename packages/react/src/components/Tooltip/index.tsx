import { ComponentProps } from 'react'
import {
  TooltipArrow,
  TooltipContentContainer,
  TooltipPortalContainer,
  TooltipProviderContainer,
  TooltipRoot,
  TooltipTriggerContainer,
} from './styles'
import { Text } from '../Text'

export interface TooltipProviderProps
  extends ComponentProps<typeof TooltipProviderContainer> {}

export function TooltipProvider({ children, ...props }: TooltipProviderProps) {
  return (
    <TooltipProviderContainer {...props}>
      <TooltipRoot>{children}</TooltipRoot>
    </TooltipProviderContainer>
  )
}

export interface TooltipTriggerProps
  extends ComponentProps<typeof TooltipTriggerContainer> {}

export function TooltipTrigger({ children }: TooltipTriggerProps) {
  return <TooltipTriggerContainer asChild>{children}</TooltipTriggerContainer>
}

export interface TooltipContentProps
  extends ComponentProps<typeof TooltipContentContainer> {}

export function TooltipContent({ content, ...props }: TooltipContentProps) {
  return (
    <TooltipPortalContainer>
      <TooltipContentContainer sideOffset={5} {...props}>
        <Text size="sm">{content}</Text>
        <TooltipArrow />
      </TooltipContentContainer>
    </TooltipPortalContainer>
  )
}

TooltipContent.displayName = 'TooltipContent'
