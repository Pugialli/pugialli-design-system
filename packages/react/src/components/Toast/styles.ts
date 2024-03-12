import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastPrimitiveProvider = styled(Toast.Provider, {})

export const ToastContainer = styled(Toast.Root, {
  all: 'unset',
  backgroundColor: '$gray800',
  borderRadius: '$md',
  border: '2px solid $gray600',
  padding: '$3 $5',
  overflow: 'hidden',

  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
})

export const ToastHead = styled('div', {
  position: 'relative',
  display: 'inline-block',

  width: '100%',
  color: '$white',
})

export const ToastTitle = styled(Toast.Title, {
  width: '$80',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  position: 'absolute',
  top: 0,
  right: 0,

  cursor: 'pointer',
  color: '$gray100',

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  padding: VIEWPORT_PADDING,
  width: '$80',
  maxWidth: '100vw',
  zIndex: 2147483647,
  outline: 'none',

  flexDirection: 'column',
  margin: 0,
  listStyle: 'none',

  gap: 10,
})
