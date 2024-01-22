import React from 'react'

// React Three Fiber
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'

// Components
import { Shirt, Backdrop, CameraRig } from './components'

type Props = {}

const CanvasModel = (props: Props) => {
	return (
		<Canvas>
			<ambientLight intensity={0.5} />
			<Environment preset='city' />

			<CameraRig>
				<Center>
					<Shirt />
				</Center>
			</CameraRig>
		</Canvas>
	)
}

export default CanvasModel
