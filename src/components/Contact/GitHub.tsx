import { FooterButton } from '@/components/DesignSystem/FooterButtons/FooterButton'
import { createPath } from '@/components/Contact/utils'

export const GitHub = () => {
  return (
    <FooterButton
      text={'GitHub'}
      alt={'Vojtech Prokop - GitHub'}
      icon={createPath('github.png')}
    />
  )
}
