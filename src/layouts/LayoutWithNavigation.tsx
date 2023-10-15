import { NavContentContainer } from '@/components/DesignSystem/Layout'
import { ContentContainer } from '@/components/DesignSystem/Layout/ContentContainer'
import { FC, ReactNode } from 'react'
import { NotChatPageContentContainer } from '@/components/DesignSystem/Layout/NotChatPageContentContainer'
import { NavigationView } from '@/layouts/Navigation/NavigationView'

type Props = {
  children: ReactNode
}

export const LayoutWithNavigation: FC<Props> = ({ children }) => {
  return (
    <NotChatPageContentContainer>
      <NavContentContainer
        nav={<NavigationView />}
        content={<ContentContainer>{children}</ContentContainer>}
      />
    </NotChatPageContentContainer>
  )
}
