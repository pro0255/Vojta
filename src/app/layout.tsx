import './globals.css'
import { FC, ReactNode } from 'react'
import { Metadata } from 'next'
import Head from 'next/head'
import { PageContainer } from '@/components/DesignSystem/Layout/PageContainer'

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
      <body>
        <PageContainer>{children}</PageContainer>
      </body>
    </html>
  )
}

export default RootLayout
