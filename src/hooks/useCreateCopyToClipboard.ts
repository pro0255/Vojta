import { useFlashMessages } from '@/components/FlashMessage/flashMessagesStore'

export const useCreateCopyToClipboard = (text: string) => {
  const addFlashMessage = useFlashMessages(flashMessages => flashMessages.add)

  return () => {
    navigator.clipboard.writeText(text)
    addFlashMessage({
      title: 'Copied to clipboard',
      content: text,
    })
  }
}
