import { FooterAnchor } from '@/components/DesignSystem/FooterAnchor'
import { BiLogoLinkedin } from 'react-icons/bi'
import { ICON_SIZE } from '@/components/Contact/config'

export const LinkedIn = () => {
  return (
    <FooterAnchor
      link={'https://www.linkedin.com/in/vojta-prokop-91b71b1a0/'}
      rawIcon
      text={'LinkedIn'}
      alt={'Vojtech Prokop - LinkedIn'}
      icon={<BiLogoLinkedin size={ICON_SIZE} />}
    />
  )
}
