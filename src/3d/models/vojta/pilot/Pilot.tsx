import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { createPathToVojta } from '@/3d/utils/paths'
import { VojtaType } from '@/3d/types'
import { useAvatarCarousel } from '@/3d/hooks/useAvatarCarousel'

const path = createPathToVojta(VojtaType.Pilot)

export function Pilot(props: any) {
  const gltf: any = useGLTF(path)
  const { nodes, materials } = gltf

  const ref = useRef(null)
  useAvatarCarousel(false, 'Kneeling', ref)

  return (
    <>
      <group {...props} ref={ref} dispose={null}>
        <group rotation-x={-Math.PI / 2}>
          <primitive object={nodes.Hips} />
          <skinnedMesh
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials.Wolf3D_Body}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Glasses"
            geometry={nodes.Wolf3D_Glasses.geometry}
            material={materials.Wolf3D_Glasses}
            skeleton={nodes.Wolf3D_Glasses.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Glasses.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Glasses.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Headwear"
            geometry={nodes.Wolf3D_Headwear.geometry}
            material={materials.Wolf3D_Headwear}
            skeleton={nodes.Wolf3D_Headwear.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Headwear.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Headwear.morphTargetInfluences}
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
