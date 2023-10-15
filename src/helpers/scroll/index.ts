'use client'

export const scroll = {
  scrollToTop: () => {
    const scrollElement = document.querySelector('html')

    if (scrollElement === null) {
      return
    }

    scrollElement.scrollTop = 0
  },
  scrollToBottom: () => {
    const scrollElement = document.querySelector('html')

    if (scrollElement === null) {
      return
    }

    scrollElement.scrollTop = scrollElement.scrollHeight
  },
}
