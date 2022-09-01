import React from 'react'

import doubleQuote from '../../assets/icon/double-quote.png'

function CardTestimonial({ item }) {
  return (
    <div key={item.id}>
      <div className='text-start p-4 rounded' style={{ width: '20rem' }}>
        <img src={doubleQuote} alt="" style={{ height: "20px", width: "32px" }} />
        <div className='mt-4 fst-italic fw-semibold'>
          <p style={{ fontSize: "14px" }}>{item.testimonial}</p>
        </div>
        <div className='d-flex align-items-center'>
          <div>
            <img src={item.profile} alt="" />
          </div>
          <div className='ms-2'>
            <h6 className="fw-bold m-0 p-0">{item.name} ({item.domicile})</h6>
            <small className='m-0 p-0 text-muted' style={{fontSize: "12px"}}>{item.class}</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardTestimonial