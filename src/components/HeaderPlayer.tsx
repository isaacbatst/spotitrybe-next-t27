import React from 'react'

type Props = {}

const HeaderPlayer = (props: Props) => {
  return (
    <div className='flex flex-col gap-1'>
      <p className='text-center'>Summer Eletrohits 2005</p>
      <audio controls>
        <source 
          src="https://p.scdn.co/mp3-preview/eb49a074d2ba3026e6d08a34315af7e220a00a2a?cid=0b297fa8a249464ba34f5861d4140e58" 
          type="audio/mpeg" 
        />
      </audio>
    </div>
  )
}

export default HeaderPlayer