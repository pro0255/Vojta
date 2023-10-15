import { Navigation } from '@/layouts/Navigation/types'
import { FC } from 'react'
import { Item } from '@/layouts/Navigation/view/Item'

type Props = {
  navigationItems: Navigation
}
export const List: FC<Props> = ({ navigationItems }) => {
  return (
    <ul>
      {navigationItems.map(navItem => {
        return (
          <li key={navItem.text}>
            <Item {...navItem} />
          </li>
        )
      })}
    </ul>
  )
}
