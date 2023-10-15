import { LinkedIn } from '@/components/Contact/LinkedIn'
import { FC } from 'react'
import { Gmail } from '@/components/Contact/Gmail'
import { Twitter } from '@/components/Contact/Twitter'
import { GitHub } from '@/components/Contact/GitHub'

export const ContactContainer: FC = () => {
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 gap-4 justify-around">
      <LinkedIn />
      <Gmail />
      <Twitter />
      <GitHub />
    </div>
  )
}
