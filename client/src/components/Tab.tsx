'use client'

import React from 'react'
import { StaticImageData } from 'next/image'

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

	return (
		<div
			key={name}
			className={cn('tab-btn',
			isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4')}
			onClick={handleClick}
			style={activeStyle}
		></div>
	)
}

export default Tab
