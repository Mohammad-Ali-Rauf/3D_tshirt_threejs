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


type Props = {}

const Customizer = (props: Props) => {
  return (
    <div>Customizer</div>
  )
}

export default Customizer