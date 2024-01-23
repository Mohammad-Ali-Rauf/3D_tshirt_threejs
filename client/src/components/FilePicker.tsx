import React, { FormEvent } from 'react'

// Constants
import { DecalTypes } from '@/app/config/constants'

// Components
import { Button } from './ui/button'

interface Props {
	file: any
	setFile: (file: string) => void
	readFile: (type: keyof typeof DecalTypes) => void
}

const FilePicker = ({ file, setFile, readFile }: Props) => {
	return (
		<div className='filepicker-container'>
			<div className='flex flex-1 flex-col'>
				<input
					type='file'
					id='file-upload'
					accept='image/*'
					onChange={(e: any) => setFile(e.target.files[0])}
				/>
        <label htmlFor="file-upload" className='filepicker-label'>Upload File</label>

        <p className='mt-2 text-xs text-gray-500 truncate'>{file === '' ? 'No File Chosen' : file.name}</p>
			</div>

      <div className='mt-4 flex flex-wrap gap-3'>
        <Button
          onClick={() => readFile('logo')}
          disabled={file === ''}
          className='w-full text-xs'
          variant='outline'
        >
          Use as Logo
        </Button>

        <Button
          onClick={() => readFile('full')}
          disabled={file === ''}
          className='w-full text-xs'
          variant='default'
        >
          Use as Full Texture
        </Button>
      </div>
		</div>
	)
}

export default FilePicker
