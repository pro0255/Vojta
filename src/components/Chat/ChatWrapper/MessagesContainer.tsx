import { FC, ReactNode } from 'react'
import { Input } from '@/components/DesignSystem'

type Props = {
  children: ReactNode
}
export const MessagesContainer: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-w-2xl max-w-2xl">
      <section>
        <main>{children}</main>
      </section>
      <footer className="fixed bottom-0 left-0 w-[calc(100%)]">
        <Input />
      </footer>
    </div>
  )
}
