import React, { PropsWithChildren } from 'react'

const Card = (props: PropsWithChildren) => {
  return (
    <li className='bg-stone-950 p-3 rounded-lg 
    hover:bg-stone-900 cursor-pointer
    active:scale-105'>{props.children}</li>
  )
}

export default Card