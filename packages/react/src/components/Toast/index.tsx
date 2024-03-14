import { ComponentProps } from 'react'
import {
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
  ToastPrimitiveProvider,
  ToastClose,
  ToastHead,
} from './styles'
import { X } from 'phosphor-react'
import { Text } from '../Text'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  isOpen?: boolean
  handleChange: () => void
}

export interface ToastProviderProps
  extends ComponentProps<typeof ToastPrimitiveProvider> {}

export function ToastProvider({ children, ...props }: ToastProviderProps) {
  return (
    <ToastPrimitiveProvider {...props}>
      {children}
      <ToastViewport />
    </ToastPrimitiveProvider>
  )
}

export function Toast({
  title,
  description,
  isOpen,
  handleChange,
  ...props
}: ToastProps) {
  return (
    <ToastContainer open={isOpen} onOpenChange={handleChange} {...props}>
      <ToastHead>
        {title && (
          <ToastTitle asChild>
            <Text as="strong" size="xl">
              {title}
            </Text>
          </ToastTitle>
        )}
        <ToastClose aria-label="Close" onClick={handleChange}>
          <X size={20} aria-hidden />
        </ToastClose>
      </ToastHead>

      {description && (
        <ToastDescription asChild>
          <Text size="sm">{description}</Text>
        </ToastDescription>
      )}
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
