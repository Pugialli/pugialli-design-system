import { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps, ToastProvider } from '@pugialli-ui/react'
import { useArgs } from '@storybook/client-api'
import React from 'react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Título do Toast',
    description: 'Descrição do toast',
    open: false,
  },

  decorators: [
    (Story) => {
      const [, updateArgs] = useArgs()
      const [isOpen, setIsOpen] = React.useState(false)

      const timerRef = React.useRef(0)

      React.useEffect(() => {
        return () => clearTimeout(timerRef.current)
      }, [])

      function setOpen(command: boolean) {
        setIsOpen(command)
        updateArgs({ open: command })
      }

      return (
        <ToastProvider swipeDirection="right">
          <Button
            onClick={() => {
              setOpen(false)
              window.clearTimeout(timerRef.current)
              timerRef.current = window.setTimeout(() => {
                setOpen(true)
              }, 100)
            }}
          >
            Ativar Toast
          </Button>

          <Story
            title="Teste"
            description="Teste descrição"
            handleChange={setOpen}
            isOpen={isOpen}
          />
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
