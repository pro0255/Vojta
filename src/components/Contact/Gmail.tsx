import { FooterButton } from '@/components/DesignSystem/FooterButtons/FooterButton'
import { BiLogoGmail } from 'react-icons/bi'
import { ICON_SIZE } from '@/components/Contact/config'

export const Gmail = () => {
  return (
    <FooterButton
      rawIcon
      text={'Gmail'}
      alt={'Vojtech Prokop - Gmail Contact'}
      icon={<BiLogoGmail size={ICON_SIZE} />}
    />
  )
}
