import { FallbackProps } from 'react-error-boundary'
import { Paragraph } from '@/components/DesignSystem/Blocks/Paragraph'
import { Card, Header } from '@/components/DesignSystem'
import React from 'react'
import Link from 'next/link'
import { CircleContainer } from '@/components/DesignSystem/Containers/CircleContainer'
import { AiOutlineArrowRight } from 'react-icons/ai'

export function chatFallbackError(_: FallbackProps) {
  return (
    <div
      className={
        'flex flex-col w-[100vw] h-[100vh] justify-center items-center'
      }
      role="alert"
    >
      <div
        style={{
          width: '70%',
        }}
      >
        <Card
          mainSlot={
            <div className={'flex flex-col justify-center items-center'}>
              <Header.Three className={'text-center'}>
                {"We're sorry, but our chat is currently unavailable 😔"}
              </Header.Three>
              <Link className={'mt-2 animate-pulse'} href={'/home'}>
                <CircleContainer>
                  <AiOutlineArrowRight />
                </CircleContainer>
              </Link>

              <Paragraph className={'text-red-500 break-all'}>
                I kindly request you to report any bugs to:
                <a
                  className={
                    'ml-2 text-md text-black hover:underline focus:underline'
                  }
                  href={
                    'mailto:prokop.vojtech@gmail.com?subject=Hello&body=Hello Vojta!'
                  }
                >
                  prokop.vojtech@gmail.com
                </a>
              </Paragraph>
            </div>
          }
        />
      </div>
    </div>
  )
}
