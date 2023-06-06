import React from 'react'
import Card from './Card'

type Props = {
  image: string,
  title: string
}

const ChooseCategoryItem: React.FC<Props> = ({image, title}: Props) => {
  return (
    <Card>
      <img src={image} alt={title} className='mb-2 rounded-full w-32'/>
      <p className='text-center'>{title}</p>
    </Card>
  )
}

export default ChooseCategoryItem