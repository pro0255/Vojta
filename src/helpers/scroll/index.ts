'use client'

export const scroll = {
  scrollToTop: () => {
    if (typeof document !== 'undefined') {
      const scrollElement = document.querySelector('html')

      if (scrollElement === null) {
        return
      }

      scrollElement.scrollTop = 0
    }
  },
  scrollToBottom: () => {
    if (typeof document !== 'undefined') {
      const scrollElement = document.querySelector('html')

      if (scrollElement === null) {
        return
      }

      scrollElement.scrollTop = scrollElement.scrollHeight
    }
  },
}
