// @ts-nocheck
'use client'

import React, { useRef } from 'react'

// React Three Fiber
import { useFrame } from '@react-three/fiber'

// Math Calculations
import { easing } from 'maath'

// State Management
import { useSnapshot } from 'valtio'
import state from '@/store'

interface Props {
	children: React.ReactNode
}

const CameraRig = ({ children }: Props) => {
	// Using Global State
	const snap = useSnapshot(state)

	// Refs
	const group = useRef()

	useFrame((state, delta) => {
		const isBreakpoint = window.innerWidth <= 1260
		const isMobile = window.innerWidth <= 600

		// set the initial model position
		let targetPosition = [-0.4, 0, 2]
		if (snap.intro) {
			if (isBreakpoint) targetPosition = [0, 0, 2]
			if (isMobile) targetPosition = [0, 0.2, 2.5]
		} else {
			if (isMobile) targetPosition = [0, 0, 2.5]
      else targetPosition = [0, 0, 2]
		}

    // set the camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta)

		// set the model rotation
		easing.dampE(
			group.current?.rotation,
			[state.pointer.y / 10, state.pointer.x / 10, 0],
			0.25,
			delta
		)
	})

	return (
		// @ts-ignore
		<group ref={group}>{children}</group>
	)
}

export default CameraRig
