import { Canvas } from '@react-three/fiber'
import React from 'react'
import { MessagesContainer } from '@/components/Chat/ChatWrapper/MessagesContainer'
import { Messages } from '@/components/Chat/ChatWrapper/Messages'
import { GuessMan, VojtaYoungAdult } from '@/Three/models'

export const ChatWrapper = () => {
  return (
    <div className="flex flex-col z-20">
      <MessagesContainer>
        <Messages />
      </MessagesContainer>
      <Canvas
        shadows
        camera={{
          fov: 30,
        }}
        style={{
          zIndex: 10,
          position: 'fixed',
          top: '0',
          left: '0',
        }}
      >
        <GuessMan scale={[0.5, 0.5, 0.5]} position={[-1.5, -0.5, 0]} />
        <ambientLight intensity={1} />
        <group position-y={-1}>
          <VojtaYoungAdult scale={[0.5, 0.5, 0.5]} position={[1.5, 0.5, 0]} />
        </group>
      </Canvas>
    </div>
  )
}
