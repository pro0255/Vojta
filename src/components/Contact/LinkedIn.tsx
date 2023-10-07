import { FooterButton } from '@/components/DesignSystem/FooterButtons/FooterButton'
import { BiLogoLinkedin } from 'react-icons/bi'
import { ICON_SIZE } from '@/components/Contact/config'

export const LinkedIn = () => {
  return (
    <FooterButton
      rawIcon
      text={'LinkedIn'}
      alt={'Vojtech Prokop - LinkedIn'}
      icon={<BiLogoLinkedin size={ICON_SIZE} />}
    />
  )
}
