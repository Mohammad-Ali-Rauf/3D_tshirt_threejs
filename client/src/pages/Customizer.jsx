import React, { useState, useEffect } from 'react'
import { useSnapshot } from 'valtio'
import { AnimatePresence, motion } from 'framer-motion'

import config from '../config/config'
import state from '../store/index'
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion'

const Customizer = () => {
  return (
    <div>Customizer</div>
  )
}

export default Customizer