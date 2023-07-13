import { LinkedIn } from '@/components/Contact/LinkedIn'
import { FC } from 'react'
import { Gmail } from '@/components/Contact/Gmail'
import { Twitter } from '@/components/Contact/Twitter'
import { GitHub } from '@/components/Contact/GitHub'

export const ContactContainer: FC = () => {
  return (
    <div className="p-5 flex flex-row justify-around">
      <LinkedIn />
      <Gmail />
      <Twitter />
      <GitHub />
    </div>
  )
}
