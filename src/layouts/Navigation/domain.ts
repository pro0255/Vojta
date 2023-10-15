import { Navigation, NavigationItem } from '@/layouts/Navigation/types'
import { tu } from '@/helpers/text'
import { pipe } from 'fp-ts/function'
import { navigation } from '@/layouts/Navigation/routes'

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
