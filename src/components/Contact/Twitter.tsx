import { FooterButton } from '@/components/DesignSystem/FooterButtons/FooterButton'
import { BiLogoTwitter } from 'react-icons/bi'
import { ICON_SIZE } from '@/components/Contact/config'

export const Twitter = () => {
  return (
    <FooterButton
      rawIcon
      text={'Twitter'}
      alt={'Vojtech Prokop - Twitter'}
      icon={<BiLogoTwitter size={ICON_SIZE} />}
    />
  )
}
