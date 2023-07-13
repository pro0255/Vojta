import React, { FC, ReactNode } from 'react'

type Props = {
  headerSlot?: ReactNode
  mainSlot: ReactNode
  footerSlot?: ReactNode
}
export const Card: FC<Props> = ({ footerSlot, headerSlot, mainSlot }) => {
  return (
    <div className="p-5 w-full hover:bg-slate-50">
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
