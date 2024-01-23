'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'

// styles
import { cn } from '@/lib/utils'

// State Management
import { useSnapshot } from 'valtio'
import state from '@/store'

interface Props {
	tab: {
		name: string
		icon: StaticImageData
	}
	isFilterTab?: boolean
	isActiveTab?: string
	handleClick: () => void
}

const Tab = ({
	tab: { name, icon },
	isFilterTab,
	isActiveTab,
	handleClick,
}: Props) => {
	// Global State Store
	const snap = useSnapshot(state)

	const activeStyle =
		isFilterTab && isActiveTab
			? { backgroundColor: snap.color, opacity: 0.5 }
			: { backgroundColor: snap.color, opacity: 1 }

	const glassmorphismStyle = {
		background:
			'linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.2))', // Gradient with opacity
		boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
		borderRadius: '8px', // Adjust border radius as needed
		transition: 'background 0.3s ease-in-out',
	}

	return (
		<div
			key={name}
			className={cn(
				'tab-btn',
				isFilterTab ? 'rounded-full p-1 glassmorphism' : 'rounded-md',
				'border-[2px] border-gray-900 shadow-md',
				'w-64 h-64 flex items-center justify-center' // Adjust size and centering
			)}
			onClick={handleClick}
			style={{
				backgroundColor: '#001F3F', // Use a color that fits your light theme
				opacity: isFilterTab && isActiveTab ? 0.5 : 1,
			}}
		>
			<Image
				src={icon}
				alt={name}
				className={cn('w-2/3 h-2/3 object-contain')}
			/>
		</div>
	)
}

export default Tab
