'use client'

import React from 'react'
import Image from 'next/image'

// Components
import CanvasModel from '@/canvas'
import Customizer from '@/components/Customizer'
import { Button } from '@/components/ui/button'

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion'

// State Management
import state from '@/store'
import { useSnapshot } from 'valtio'

// Config
import {
	headContainerAnimation,
	headContentAnimation,
	headTextAnimation,
	slideAnimation,
} from '@/app/config/motion'
import { cn } from '@/lib/utils'

type Props = {}

const Home = (props: Props) => {
	// Using Global State Store
	const snap = useSnapshot(state)

	const [isHovered, setIsHovered] = React.useState(false)

	return (
		<main className='app transition-all ease-in'>
			<AnimatePresence>
				{snap.intro && (
					<motion.section className='home' {...slideAnimation('left')}>
						<motion.header {...slideAnimation('down')}>
							<Image
								priority
								src='/threejs.png'
								alt='LOGO'
								className='w-8 h-8 object-contain'
								width={8}
								height={8}
								unoptimized
							/>
						</motion.header>
						<motion.div className='home-content' {...headContainerAnimation}>
							<motion.div {...headTextAnimation}>
								<h1 className='head-text'>
									LET&apos;S <br className='xl:block hidden' /> DO IT.
								</h1>
							</motion.div>
							<motion.div
								className='flex flex-col gap-5'
								{...headContentAnimation}
							>
								<p className='max-w-md font-normal text-gray-600 text-base'>
									Discover the future of style with our new 3D customization
									tool {`\u2500`}{' '}
									<strong>Redefine your look effortlessly</strong> using the
									latest in AI technology.
								</p>

								<Button
									onClick={() => (state.intro = false)}
									style={{
										backgroundColor: isHovered ? '#59b2e2' : '#48BDEF',
									}}
									onMouseEnter={() => setIsHovered(true)}
									onMouseLeave={() => setIsHovered(false)}
									className={`font-bold text-sm w-fit px-5 py-3`}
								>
									Customize It
								</Button>
							</motion.div>
						</motion.div>
					</motion.section>
				)}
			</AnimatePresence>
			<CanvasModel />
			<Customizer />
		</main>
	)
}

export default Home
