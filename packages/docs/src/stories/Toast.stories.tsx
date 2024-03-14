import { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps, ToastProvider } from '@pugialli-ui/react'
import { useArgs, useCallback } from '@storybook/client-api'
import { useEffect, useRef } from 'react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Título do Toast',
    description: 'Descrição do toast',
    isOpen: false,
  },

  decorators: [
    (Story) => {
      const [args, updateArgs] = useArgs()

      const timerRef = useRef(0)

      const setOpen = useCallback(() => {
        updateArgs({ isOpen: !args.isOpen })
      }, [updateArgs, args.isOpen])

      useEffect(() => {
        updateArgs({ handleChange: setOpen })

        return () => clearTimeout(timerRef.current)
      }, [updateArgs, setOpen])

      function handleClick() {
        setOpen()
        window.clearTimeout(timerRef.current)
        timerRef.current = window.setTimeout(() => {
          setOpen()
        }, 100)
      }

      return (
        <ToastProvider swipeDirection="right">
          <Button onClick={handleClick}>Ativar Toast</Button>

          <Story />
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
