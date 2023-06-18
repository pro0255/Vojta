import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import { FC, ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export type LayoutProps = { children: ReactNode }

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
