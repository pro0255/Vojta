import { FooterAnchor } from '@/components/DesignSystem/FooterButtons/FooterAnchor'
import { BiLogoGithub } from 'react-icons/bi'
import { ICON_SIZE } from '@/components/Contact/config'

export const GitHub = () => {
  return (
    <FooterAnchor
      link={'https://github.com/pro0255'}
      rawIcon
      text={'GitHub'}
      alt={'Vojtech Prokop - GitHub'}
      icon={<BiLogoGithub size={ICON_SIZE} />}
    />
  )
}
