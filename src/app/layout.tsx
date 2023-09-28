import './globals.css'
import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { AppProviders } from '@/app/AppProviders'
import { Roboto_Slab } from 'next/font/google'

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto',
  preload: true,
  weight: '300',
})

export type LayoutProps = { children: ReactNode }

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon/favicon-16x16.png" />
      </Head>
      <body className={`${robotoSlab.variable}`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}

export default RootLayout
