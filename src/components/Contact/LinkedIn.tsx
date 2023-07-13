import { FooterButton } from '@/components/DesignSystem/FooterButtons/FooterButton'
import { createPath } from '@/components/Contact/utils'

export const LinkedIn = () => {
  return (
    <FooterButton
      text={'LinkedIn'}
      alt={'Vojtech Prokop - LinkedIn'}
      icon={createPath('linkedin.jpg')}
    />
  )
}
