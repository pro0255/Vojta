import { NavContentContainer } from '@/components/DesignSystem/Layout'
import { Navigation } from '@/components'
import { ContentContainer } from '@/components/DesignSystem/Layout/ContentContainer'
import { FC, ReactNode } from 'react'
import { LayoutVojta } from '@/layouts/Vojta'

type Props = {
  children: ReactNode
}

export const LayoutWithNavigation: FC<Props> = ({ children }) => {
  return (
    <LayoutVojta>
      <NavContentContainer
        nav={<Navigation />}
        content={<ContentContainer>{children}</ContentContainer>}
      />
    </LayoutVojta>
  )
}
