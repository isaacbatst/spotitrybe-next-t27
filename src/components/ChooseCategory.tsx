import React from 'react'
import ChooseCategoryItem from './ChooseCategoryItem'

const ChooseCategory: React.FC = () => {
  return (
    <div className='flex-1'>
      <h2 className='mb-10 text-center'>Escolha a categoria</h2>
      <ul className='flex flex-wrap gap-5 justify-center'>
        <ChooseCategoryItem 
          image='https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg'
          title='React'
        />
        <ChooseCategoryItem 
          image='https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg'
          title='React'
        />
        <ChooseCategoryItem 
          image='https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg'
          title='React'
        />
        <ChooseCategoryItem 
          image='https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg'
          title='React'
        />
        <ChooseCategoryItem 
          image='https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg'
          title='React'
        />
      </ul>
    </div>
  )
}

export default ChooseCategory