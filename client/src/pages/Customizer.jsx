import React, { useState, useEffect } from 'react'
import { useSnapshot } from 'valtio'
import { AnimatePresence, motion } from 'framer-motion'

import config from '../config/config'
import state from '../store/index'
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion'

import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components'

const Customizer = () => {
  const snap = useSnapshot(state)
  return (
    <AnimatePresence>Customizer</AnimatePresence>
  )
}

export default Customizer