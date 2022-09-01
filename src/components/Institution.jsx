import React from 'react'

// Data dummy
import { dataInstitution } from '../data/dataInstitution'

function Institution() {
  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-between'>
        <h4 className='m-0 p-0 fw-bold mb-3'>Lembaga</h4>
        <p className='text-primary fw-bold'>Lihat Semua</p>
      </div>
      <div>
        <div className='row row-cols-lg-6 g-1 row-cols-3'>
          {dataInstitution.map(item => (
            <div className='col text-center p-3 rounded' key={item.id}>
              <div className='h-100 align-middle d-block align-items'>
                <img src={item.img} alt=""/>
                <p className='m-0 mt-3 fw-bold'>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Institution