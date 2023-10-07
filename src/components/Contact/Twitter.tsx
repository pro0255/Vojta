import { FooterAnchor } from '@/components/DesignSystem/FooterButtons/FooterAnchor'
import { BiLogoTwitter } from 'react-icons/bi'
import { ICON_SIZE } from '@/components/Contact/config'

export const Twitter = () => {
  return (
    <FooterAnchor
      link={'https://twitter.com/VojtechProkop'}
      rawIcon
      text={'Twitter'}
      alt={'Vojtech Prokop - Twitter'}
      icon={<BiLogoTwitter size={ICON_SIZE} />}
    />
  )
}
