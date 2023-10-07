import { FooterAnchor } from '@/components/DesignSystem/FooterButtons/FooterAnchor'
import { BiLogoGmail } from 'react-icons/bi'
import { ICON_SIZE } from '@/components/Contact/config'

export const Gmail = () => {
  return (
    <FooterAnchor
      link={'mailto:prokop.vojtech@gmail.com?subject=Hello&body=Hello Vojta!'}
      rawIcon
      text={'Gmail'}
      alt={'Vojtech Prokop - Gmail Contact'}
      icon={<BiLogoGmail size={ICON_SIZE} />}
    />
  )
}
