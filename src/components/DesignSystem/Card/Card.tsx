import React, { FC, ReactNode } from 'react'

type Props = {
  headerSlot?: ReactNode
  mainSlot: ReactNode
  footerSlot?: ReactNode
  isDisabled?: boolean
}
export const Card: FC<Props> = ({
  footerSlot,
  headerSlot,
  mainSlot,
  isDisabled,
}) => {
  return (
    <div
      className={`transition-all duration-200 p-5 w-full shadow-lg bg-slate-50 ${
        isDisabled ? 'bg-slate-50 opacity-50' : 'hover:bg-slate-100'
      }`}
    >
      {headerSlot && (
        <>
          <header>{headerSlot}</header>
          <hr className="my-3" />
        </>
      )}
      <main>{mainSlot}</main>
      {footerSlot && (
        <footer>
          <>
            <hr className="my-3" />
            {footerSlot}
          </>
        </footer>
      )}
    </div>
  )
}
