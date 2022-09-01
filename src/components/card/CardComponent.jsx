import React from 'react'
import { Icon } from '@iconify/react'

import CardImg from '../../assets/card.png'

function CardComponent() {
  return (
    <div>
      <div className='card text-start shadow' style={{ width: '14rem' }}>
        <img src={CardImg} alt="Card Img" className='card-img-top' />
        <div className="card-body">
          <small className='text-muted'>Arkademi</small>
          <h6 className='fw-bold'> Membuat Landing Page bagi Designer Website</h6>
          <div className='d-flex align-items-center mb-3'>
            <Icon icon="ant-design:star-filled" color="#f7de06" width="24" />
            <small className='m-1 fw-bold'>4.5</small>
            <small className='m-1'>(&gt;1000)</small>
          </div>
          <div className='d-flex align-items-center'>
            <p className='bg-discount fw-bold'>30%</p>
            <p className='text-muted ms-1 text-decoration-line-through fs-6'>Rp 320.000</p>
          </div>
          <h5 className='fw-bold'>Rp 280.000</h5>
        </div>
      </div>
    </div>
  )
}

export default CardComponent