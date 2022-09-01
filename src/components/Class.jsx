import React from 'react'
import Slider from './Slider'

function Class({title}) {
  return (
    <div className='container'>
      <div className='d-flex justify-content-between'>
        <h4 className='m-0 p-0 fw-bold mb-3'>{title}</h4>
        <p className='text-primary fw-bold'>Lihat Semua</p>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  )
}

export default Class