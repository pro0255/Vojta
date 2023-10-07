import { FooterButton } from '@/components/DesignSystem/FooterButtons/FooterButton'
import { BiLogoGithub } from 'react-icons/bi'
import { ICON_SIZE } from '@/components/Contact/config'

export const GitHub = () => {
  return (
    <FooterButton
      rawIcon
      text={'GitHub'}
      alt={'Vojtech Prokop - GitHub'}
      icon={<BiLogoGithub size={ICON_SIZE} />}
    />
  )
}
