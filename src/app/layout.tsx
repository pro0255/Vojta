import './globals.css'
import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { PageContainer } from '@/components/DesignSystem/Layout/PageContainer'
import { DebugComponent } from '@/debug/DebugComponent'

export type LayoutProps = { children: ReactNode }
const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon/favicon-16x16.png" />
      </Head>
      <body>
        <DebugComponent />
        <PageContainer>{children}</PageContainer>
      </body>
    </html>
  )
}

export default RootLayout
