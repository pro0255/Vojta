import { useLayoutEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export const useIsScrollbar = () => {
  const [isScrollbar, seIsScrollbar] = useState<boolean>(false)
  const pathname = usePathname()

  useLayoutEffect(() => {
    const htmlElement = document.querySelector('html')

    if (!htmlElement) {
      return
    }

    const heightWithScroll = htmlElement.scrollHeight
    const clientSeeHeight = htmlElement.clientHeight

    seIsScrollbar(heightWithScroll > clientSeeHeight)
  }, [pathname])

  return isScrollbar
}
