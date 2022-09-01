import React from 'react'

import {dataCategory} from '../data/dataCategory'

function TopCategories() {
  return (
    <div className='container'>
      <div>
        <h4 className='m-0 p-0 fw-bold mb-3'>Kategory Terpopuler</h4>
      </div>

      <div className='d-block d-lg-flex justify-content-between'>
        {dataCategory.map(item => (
          <div className='topCategories shadow d-flex d-lg-block mb-3 mb-lg-0 align-items-center' key={item.id} >
            <img src={item.img} alt="" />
            <p className='m-0 mt-3 fw-bold ms-4 ms-lg-0'>{item.name}</p>
          </div>
        ))}
      </div>
      <div className='my-4 text-center'>
        <button className='btn btn-outline-spesialis fw-bold'>Lihat Semua Spesialisasi</button>
      </div>
    </div>
  )
}

export default TopCategories