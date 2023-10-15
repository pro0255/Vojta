import { FC } from 'react'
import { NavigationItem } from '@/layouts/Navigation/types'
import { StyledLink } from '@/layouts/Navigation/styled'
import { NormalText } from '@/components/DesignSystem'

export const Item: FC<NavigationItem> = ({ text, link }) => {
  return (
    <StyledLink href={link}>
      <NormalText>{text}</NormalText>
    </StyledLink>
  )
}
