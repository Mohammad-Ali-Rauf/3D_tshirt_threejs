import React from 'react'

interface Props {
  prompt: string
  setPrompt: (prompt: string) => void
  generatingImage: boolean
  setGeneratingImage: (generatingImage: boolean) => void
  handleSubmit: () => void
}

const AIPicker = (props: Props) => {
  return (
    <div>AIPicker</div>
  )
}

export default AIPicker