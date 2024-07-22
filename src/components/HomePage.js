import React from 'react'
import Container from './Container'

function HomePage() {
  return (
    <>
    <div className= 'max-w-screen-lg mx-auto pt-24 pb-5 bg-hmred rounded-md'>
        <p className='text-white  text-center text-3xl'>LAST CHANCE!</p>
        <p className='text-white py-5 text-center font-bold text-7xl'>Up to 70% off</p>
        <p className='text-white  text-center text-2xl'>Get it before it's gone</p>
        <p className='text-white pt-20 text-center font-extralight text-xs'>Available on styxm.com, app & in stores, price may vary.</p>
    </div>
    <Container/>
    </>
  )
}

export default HomePage