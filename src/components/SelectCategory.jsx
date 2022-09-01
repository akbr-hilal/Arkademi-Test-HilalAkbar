import React from 'react'
import { Icon } from '@iconify/react';

import { dataCategory } from '../data/dataCategory'

function SelectCategory() {
  return (
    <div className='container mt-2'>
      <div className='row'>
        <div className='col-2 d-flex align-items-center'>
          <p className="fw-bold m-0 p-0 me-3">Kategory</p>
          <div>
            <Icon icon="bxs:down-arrow" width="20" />
          </div>
        </div>
        <div className='col-10 d-none d-md-flex justify-content-evenly'>
          {dataCategory.map(item => (
            <p className=" m-0 p-0 text-center" key={item.id}>{item.name}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SelectCategory