export const scroll = {
  scrollToBottom: () => {
    const scrollElement = document.querySelector('html')

    if (scrollElement === null) {
      return
    }

    scrollElement.scrollTop = scrollElement.scrollHeight
  },
}
