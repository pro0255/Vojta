import { FooterButton } from '@/components/DesignSystem/FooterButtons/FooterButton'
import { createPath } from '@/components/Contact/utils'

export const Twitter = () => {
  return (
    <FooterButton
      text={'Twitter'}
      alt={'Vojtech Prokop - Twitter'}
      icon={createPath('twitter.png')}
    />
  )
}
