import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { createPathToVojta } from '@/3d/utils/paths'
import { VojtaType } from '@/3d/types'
import { useAvatarCarousel } from '@/3d/hooks/useAvatarCarousel'

const path = createPathToVojta(VojtaType.Robot)

export function Robot(props: any) {
  const ref = useRef(null)
  useAvatarCarousel(false, 'Robot', ref)

  const gltf: any = useGLTF(path)
  const { nodes, materials } = gltf

  return (
    <>
      <group {...props} ref={ref} dispose={null}>
        <group rotation-x={-Math.PI / 2}>
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name={'Wolf3D_Outfit_Bottom'}
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            morphTargetDictionary={
              nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences
            }
          />
          <skinnedMesh
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials.Wolf3D_Hair}
            skeleton={nodes.Wolf3D_Hair.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Hair.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Hair.morphTargetInfluences}
          />
          <skinnedMesh
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            morphTargetDictionary={
              nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences
            }
          />
          <skinnedMesh
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            morphTargetDictionary={
              nodes.Wolf3D_Outfit_Top.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.Wolf3D_Outfit_Top.morphTargetInfluences
            }
          />

          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials.Wolf3D_Teeth}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
        </group>
      </group>
    </>
  )
}

useGLTF.preload(path)
