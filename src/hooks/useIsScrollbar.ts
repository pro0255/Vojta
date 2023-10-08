import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

type UseIsScrollbarValue = {
  isScrollbar: boolean
  canScrollBottom: boolean
  canScrollTop: boolean
}

const calculateScrollAttributes = (): UseIsScrollbarValue | null => {
  const htmlElement = document.querySelector('html')

  if (!htmlElement) {
    return null
  }

  const heightWithScroll = htmlElement.scrollHeight
  const clientSeeHeight = htmlElement.clientHeight

  const canScrollBottom =
    htmlElement.scrollHeight -
      htmlElement.scrollTop -
      htmlElement.clientHeight >
    0

  const canScrollTop = htmlElement.scrollTop > 0
  const isScrollbar = heightWithScroll > clientSeeHeight

  return {
    canScrollBottom,
    canScrollTop,
    isScrollbar,
  }
}

export const useIsScrollbar = (): UseIsScrollbarValue => {
  const [scroll, setScroll] = useState<UseIsScrollbarValue | null>(() =>
    calculateScrollAttributes()
  )

  const pathname = usePathname()

  useEffect(() => {
    function listenToScroll() {
      setScroll(calculateScrollAttributes())
    }

    setScroll(calculateScrollAttributes())

    window.addEventListener('scroll', listenToScroll)
    return () => {
      window.removeEventListener('scroll', listenToScroll)
    }
  }, [pathname])

  return {
    canScrollBottom: scroll?.canScrollBottom ?? false,
    canScrollTop: scroll?.canScrollTop ?? false,
    isScrollbar: scroll?.isScrollbar ?? false,
  }
}
