import React from 'react'

// ColorPicker component
import { SketchPicker } from 'react-color'

// State Management
import state from '@/store'
import { useSnapshot } from 'valtio'

type Props = {}

const ColorPicker = (props: Props) => {

  // Using Global State Store
  const snap = useSnapshot(state)

	return (
    <div className='absolute left-full ml-3'>
      <SketchPicker color={snap.color} disableAlpha onChange={(color) => state.color = color.hex} />
    </div>
  )
}

export default ColorPicker
