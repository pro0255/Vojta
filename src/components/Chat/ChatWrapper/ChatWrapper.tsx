import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { MessagesContainer } from '@/components/Chat/ChatWrapper/MessagesContainer'
import { Messages } from '@/components/Chat/ChatWrapper/Messages'
import { Model } from '@/Three/models'
import { Guess } from '@/Three/Guess'

export const ChatWrapper = () => {
  useEffect(() => {
    const call = async () => {
      console.log('Calling')
      // const res = await AIModel.call(
      //   'What would be a good company name a company that makes colorful socks?'
      // )
      // console.log(res)
    }

    call()
  })

  return (
    <div className="flex flex-row">
      <MessagesContainer>
        <Messages />
      </MessagesContainer>
      <Canvas
        shadows
        camera={{
          fov: 30,
        }}
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
        }}
      >
        <Guess.models.man scale={[0.5, 0.5, 0.5]} position={[-1.5, -0.5, 0]} />
        <ambientLight intensity={1} />
        <group position-y={-1}>
          <Model scale={[0.5, 0.5, 0.5]} position={[1.5, 0.5, 0]} />
        </group>
      </Canvas>
    </div>
  )
}
