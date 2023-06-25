import './globals.css'
import { Inter } from 'next/font/google'
import { FC, ReactNode } from 'react'
import { Metadata } from 'next'
import Head from 'next/head'
import { PageContainer } from '@/components/DesignSystem/Layout/PageContainer'

const inter = Inter({ subsets: ['latin'] })

export type LayoutProps = { children: ReactNode }

export const metadata: Metadata = {
  title: 'Vojta Prokop',
}

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon/favicon-16x16.png" />
      </Head>
      <body className={inter.className}>
        <PageContainer>{children}</PageContainer>
      </body>
    </html>
  )
}

export default RootLayout
