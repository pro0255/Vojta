import { ReactNode } from 'react'

type Props = {
  Left?: ReactNode
  Right?: ReactNode
}

export const CardHeader = ({ Left, Right }: Props) => {
  return (
    <div className="w-full h-full flex flex-row justify-between">
      <span>{Left && Left}</span>
      <span>{Right && Right}</span>
    </div>
  )
}
