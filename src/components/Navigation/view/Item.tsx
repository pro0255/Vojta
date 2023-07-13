import { FC } from 'react'
import { NavigationItem } from '@/components/Navigation/types'
import { StyledLink } from '@/components/Navigation/styled'
import { NormalText } from '@/components/DesignSystem'

export const Item: FC<NavigationItem> = ({ text, link }) => {
  return (
    <StyledLink href={link}>
      <NormalText>{text}</NormalText>
    </StyledLink>
  )
}
