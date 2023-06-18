import Link from 'next/link'

export const Navigation = () => {
  return (
    <nav>
      <Link href={'/'}></Link>
      <Link href={'/about'}></Link>
      <Link href={'/blog'}></Link>
      <Link href={'/work'}></Link>
    </nav>
  )
}
