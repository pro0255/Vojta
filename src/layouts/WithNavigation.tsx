import { NavContentContainer } from '@/components/DesignSystem/Layout'
import { NavigationView } from '@/components'
import { ContentContainer } from '@/components/DesignSystem/Layout/ContentContainer'
import { FC, ReactNode } from 'react'
import { LayoutVojta } from '@/layouts/Vojta'
import { NotChatPageContentContainer } from '@/components/DesignSystem/Layout/NotChatPageContentContainer'

type Props = {
  children: ReactNode
}

export const LayoutWithNavigation: FC<Props> = ({ children }) => {
  return (
    <LayoutVojta>
      <NotChatPageContentContainer>
        <NavContentContainer
          nav={<NavigationView />}
          content={<ContentContainer>{children}</ContentContainer>}
        />
      </NotChatPageContentContainer>
    </LayoutVojta>
  )
}
