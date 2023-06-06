import React from 'react'
import ChoosePlaylistItem from './ChoosePlaylistItem'

type Props = {}

const ChoosePlaylist = (props: Props) => {
  return (
    <div className='flex-1'>
      <h2 className='text-center mb-10'>Escolher playlist</h2>
      <ul className='flex flex-wrap gap-3 justify-center'>
        <ChoosePlaylistItem />
        <ChoosePlaylistItem />
        <ChoosePlaylistItem />
        <ChoosePlaylistItem />
        <ChoosePlaylistItem />
      </ul>
    </div>
  )
}

export default ChoosePlaylist