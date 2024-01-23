import React from 'react'

// React Three Fiber
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'

// Components
import { Shirt, CameraRig } from './components'

type Props = {}

const CanvasModel = (props: Props) => {
	return (
		<Canvas
			shadows
			camera={{ position: [0, 0, 0], fov: 32 }}
			gl={{ preserveDrawingBuffer: true }}
			className='w-full max-w-full h-full'
		>
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
