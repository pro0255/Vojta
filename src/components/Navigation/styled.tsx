import Link from 'next/link'
import { FC } from 'react'

export const StyledLink: FC<React.ComponentProps<typeof Link>> = props => {
  return <Link {...props} className="block p-1 w-full hover:bg-slate-50" />
}
