// @ts-nocheck

import React from 'react'

// React Three Fiber
import { useFrame } from '@react-three/fiber'
import { useGLTF, useTexture, Decal } from '@react-three/drei'

// Math Calculations
import { easing } from 'maath'

// State Management
import { useSnapshot } from 'valtio'
import state from '@/store'

type Props = {}

const Shirt = (props: Props) => {

  // Using Global State
  const snap = useSnapshot(state)

  // Load the GLTF Model
  const { nodes, materials } = useGLTF('/shirt_baked.glb')

  // Load the Texture
  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap?.isFullTexture && (
          <Decal position={[0,0,0]} rotation={[0,0,0]} />
        )}
      </mesh>
    </group>
  )
}

export default Shirt