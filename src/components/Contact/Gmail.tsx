import { FooterButton } from '@/components/DesignSystem/FooterButtons/FooterButton'
import { createPath } from '@/components/Contact/utils'

export const Gmail = () => {
  return (
    <FooterButton
      text={'Gmail'}
      alt={'Vojtech Prokop - Gmail Contact'}
      icon={createPath('gmail.png')}
    />
  )
}
