export const scroll = {
  scrollToBottom: () => {
    const scrollElement = document.querySelector('html')

    console.log(scrollElement)
    if (scrollElement === null) {
      return
    }

    scrollElement.scrollTop = scrollElement.scrollHeight
  },
}
