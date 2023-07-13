import { List } from '@/components/Navigation/view/List'
import { navigationItems } from '@/components/Navigation/domain'

export const NavigationView = () => {
  return (
    <nav className="px-4 min-w-xl">
      <div className="sticky top-20">
        <List navigationItems={navigationItems} />
      </div>
    </nav>
  )
}
