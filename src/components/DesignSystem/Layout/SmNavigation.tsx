'use client'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import FocusTrap from 'focus-trap-react'
import { NavigationView } from '@/layouts/Navigation/NavigationView'

export const SmNavigation = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <header
        className={`inline md:hidden fixed top-0 left-0 z-50 w-[100wh] flex flex-row items-center justify-end bg-white w-full min-h-[50px] shadow-xl`}
      >
        {!isVisible && (
          <button
            onClick={() => setIsVisible(true)}
            className={'mr-[10%] hover:text-blue-700'}
          >
            <AiOutlineMenu size={25} />
          </button>
        )}

        {isVisible && (
          <FocusTrap active={isVisible}>
            <div
              className={
                'fixed relative top-0 left-0 w-[100vw] h-[100vh] bg-white'
              }
            >
              <div className={'w-full h-full flex flex-col'}>
                <header
                  className={
                    'w-full min-h-[50px] flex flex-row items-center justify-end shadow-xl'
                  }
                >
                  <button
                    className={'mr-[10%] hover:text-blue-700'}
                    onClick={() => setIsVisible(false)}
                  >
                    <AiOutlineClose size={25} />
                  </button>
                </header>
                <main className={'mt-5 p-2'}>
                  <NavigationView />
                </main>
              </div>
            </div>
          </FocusTrap>
        )}
      </header>
    </>
  )
}
