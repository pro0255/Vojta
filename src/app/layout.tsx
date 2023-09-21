import './globals.css'
import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { PageContainer } from '@/components/DesignSystem/Layout/PageContainer'
import { AppProviders } from '@/app/AppProviders'

export type LayoutProps = { children: ReactNode }
const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon/favicon-16x16.png" />
      </Head>
      <body>
        <AppProviders>
          <PageContainer>{children}</PageContainer>
        </AppProviders>
      </body>
    </html>
  )
}

export default RootLayout
