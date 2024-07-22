import React from 'react'
import Icon from "../assets/Icon.png"

const Logo = () => {
  return (
        <div className='flex justify-center items-center h-full cursor-pointer'>
            <img className='w-20 p-0 m-0' src={Icon} alt='image logo'/>
        </div>
    
  )
}

export default Logo