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
        isDisabled ? 'disabled' : 'hover:hoveredBg focus:hoveredBg'
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
