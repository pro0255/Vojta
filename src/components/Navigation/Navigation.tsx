import Link from 'next/link'
import { Anchor, NormalText } from '@/components/DesignSystem'

export const Navigation = () => {
  return (
    <nav className="px-4 min-w-xl">
      <div className="sticky top-20">
        <ul>
          <li>
            <Anchor>
              <Link href={'/'}>
                <NormalText>talk with me!</NormalText>
              </Link>
            </Anchor>
          </li>
          <li>
            <Anchor>
              <Link href={'/home'}>
                <NormalText>Home</NormalText>
              </Link>
            </Anchor>
          </li>
          <li>
            <Anchor>
              <Link href={'/about'}>
                <NormalText>About</NormalText>
              </Link>
            </Anchor>
          </li>
          <li>
            <Anchor>
              <Link href={'/blog'}>
                <NormalText>Blog</NormalText>
              </Link>
            </Anchor>
          </li>
          <li>
            <Anchor>
              <Link href={'/work'}>
                <NormalText>Work</NormalText>
              </Link>
            </Anchor>
          </li>
        </ul>
      </div>
    </nav>
  )
}
