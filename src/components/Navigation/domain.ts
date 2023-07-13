import { Navigation, NavigationItem } from '@/components/Navigation/types'
import { tu } from '@/text'
import { pipe } from 'fp-ts/function'
import { navigation } from '@/components/Navigation/constants'

const transformNavigationItem = ({
  text,
  link,
}: NavigationItem): NavigationItem => {
  return {
    link,
    text: tu.allSmall(text),
  }
}

const transformNavigation = (nav: Navigation) => {
  return nav.map(transformNavigationItem)
}

export const navigationItems = pipe(navigation, transformNavigation)
