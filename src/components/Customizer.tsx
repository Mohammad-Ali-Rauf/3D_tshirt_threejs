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
import { toast } from './ui/use-toast'

type Props = {}

const Customizer = (props: Props) => {
	// Using Global State Store
	const snap = useSnapshot(state)

	const [isHovered, setIsHovered] = React.useState(false)
	const [file, setFile] = React.useState('')
	const [prompt, setPrompt] = React.useState('')
	const [generatingImage, setGeneratingImage] = React.useState(false)
	const [activeEditorTab, setActiveEditorTab] = React.useState('')
	const [activeFilterTab, setActiveFilterTab] = React.useState({
		logoShirt: true,
		stylishShirt: false,
	})

	const generateTabContent = () => {
		switch (activeEditorTab) {
			case 'colorpicker':
				return <ColorPicker />
			case 'filepicker':
				return <FilePicker file={file} setFile={setFile} readFile={readFile} />
			case 'aipicker':
				return (
					<AIPicker
						prompt={prompt}
						setPrompt={setPrompt}
						generatingImage={generatingImage}
						setGeneratingImage={setGeneratingImage}
						handleSubmit={async () => {
							if (!prompt) toast({
								title: 'Please enter a prompt',
								variant: 'destructive',
								description: 'You must enter a prompt to generate an image',
								duration: 1500
							})

							try {
								// TODO: Call the AI Backend to generate an image
							} catch (err: any) {
								toast({
									title: 'An error is coming in the way.',
									variant: 'destructive',
									description: err.message,
									duration: 1500
								})
							} finally {
								setGeneratingImage(false)
								setActiveEditorTab('')
							}
						}}
					/>
				)
			default:
				return null
		}
	}

	const handleActiveFilterTab = (tabName: string) => {
		switch (tabName) {
			case 'logoShirt':
				state.isLogoTexture = !activeFilterTab[tabName]
				break
			case 'stylishShirt':
				state.isFullTexture = !activeFilterTab[tabName]
				break
			default:
				state.isLogoTexture = true
				state.isFullTexture = false
				break
		}

		// Update Active Filter Tab in UI
		setActiveFilterTab((prev) => ({
			...prev,
			// @ts-ignore
			[tabName]: !prev[tabName],
		}))
	}

	const handleDecals = (type: keyof typeof DecalTypes, result: any) => {
		const decalType = DecalTypes[type]

		state[decalType.stateProperty as keyof Object] = result

		if (!activeFilterTab[decalType.filterTab as keyof Object]) {
			handleActiveFilterTab(decalType.filterTab)
		}
	}

	const readFile = async (type: keyof typeof DecalTypes) => {
		try {
			const result = await reader(file)
			handleDecals(type, result)
			setActiveEditorTab('')
		} catch (err) {}
	}

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
									<Tab
										key={tab.name}
										tab={tab}
										handleClick={() => setActiveEditorTab(tab.name)}
									/>
								))}

								{generateTabContent()}
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
								// @ts-ignore
								isActiveTab={activeFilterTab[tab.name]}
								tab={tab}
								handleClick={() => handleActiveFilterTab(tab.name)}
							/>
						))}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}

export default Customizer
