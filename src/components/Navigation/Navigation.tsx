import Link from 'next/link'

export const Navigation = () => {
  return (
    <nav className="px-14">
      <div className="sticky top-20">
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/blog'}>Blog</Link>
          </li>
          <li>
            <Link href={'/work'}>Work</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
