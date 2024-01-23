'use client'

import React from 'react'

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion'

// State Management
import state from '@/store'
import { useSnapshot } from 'valtio'

// Config
import config from '@/app/config/config'
import { downloadCanvasToImage, reader } from '@/app/config/helpers'

// Icons
import { download } from '@/app/assets'

// Constants
import { EditorTabs, FilterTabs, DecalTypes } from '@/app/config/constants'

// Animations
import { fadeAnimation, slideAnimation } from '@/app/config/motion'

// Components
import { AIPicker, FilePicker, ColorPicker, Tab } from '.'
import { Button } from './ui/button'

type Props = {}

const Customizer = (props: Props) => {
	// Using Global State Store
	const snap = useSnapshot(state)

	const [isHovered, setIsHovered] = React.useState(false)

	return (
		<AnimatePresence>
			{!snap.intro && (
				<>
					<motion.div
						key='custom'
						className='absolute top-0 left-0 z-10'
						{...slideAnimation('left')}
					>
						<div className='flex items-center min-h-screen'>
							<div className='editortabs-container tabs'>
								{EditorTabs.map((tab) => (
									// @ts-ignore
									<Tab key={tab.name} tab={tab} handleClick={() => {}} />
								))}
							</div>
						</div>
					</motion.div>
					<motion.div
						className='absolute z-10 top-5 right-5'
						{...fadeAnimation}
					>
						<Button
							onClick={() => (state.intro = true)}
							style={{
								backgroundColor: isHovered ? '#59b2e2' : '#48BDEF',
							}}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
							className={`font-bold text-sm w-fit px-5 py-3 `}
						>
							Go Back
						</Button>
					</motion.div>

					<motion.div
						className='filtertabs-container'
						{...slideAnimation('up')}
					>
						{FilterTabs.map((tab) => (
							// @ts-ignore
							<Tab
								key={tab.name}
								isFilterTab
								isActiveTab=''
								tab={tab}
								handleClick={() => {}}
							/>
						))}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}

export default Customizer
