import { Messages } from '@/components/Chat/ChatWrapper/Messages'
import { Guess } from '@/Three/Guess/Guess'
import { Vojta } from '@/Three/Vojta/Vojta'
import { Input } from '@/components/DesignSystem'
import { Canvas } from '@react-three/fiber'
import { createMockedMessages } from '@/components/Chat/mock/mockedMessages'
import { useMemo } from 'react'
import { MessagesContainer } from '@/components/Chat/ChatWrapper/MessagesContainer'

export const ChatWrapper = () => {
  const m = useMemo(() => createMockedMessages(60), [])
  return (
    <div className="flex flex-row">
      <Canvas
        style={{
          position: 'sticky',
          top: '30%',
        }}
      >
        <Guess />
      </Canvas>
      <MessagesContainer>
        <>
          <Messages messages={m} />
          <Input />
        </>
      </MessagesContainer>
      <Canvas
        style={{
          position: 'sticky',
          top: '30%',
        }}
      >
        <Vojta />
      </Canvas>
    </div>
  )
}
