import React from 'react'

// Import data
import {dataCategoryFooter, dataOther} from '../data/dataFooter'

// import assets
import PaymentImg from '../assets/payment.png'
import MedsosImg from '../assets/medsos.png'
import DownloadAppImg from '../assets/download-app.png'

function Footer() {

  return (
    <div className='container'>
      <div className='row'>

        {/* Category */}
        <div className='col-lg-3 mt-3 mt-lg-0'>
          {dataCategoryFooter.map(item => (
            <div key={item.id}>
              <h5 className='mb-4'><b>{item.title}</b></h5>
              <ul className='p-0 m-0'>
                {item.item.map(item => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Other */}
        <div className='col-lg-2 mt-3 mt-lg-0'>
          {dataOther.map(item => (
            <div key={item.id}>
              <h5 className='mb-4'><b>{item.title}</b></h5>
              <ul className='p-0 m-0'>
                {item.item.map(item => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment */}
        <div className='col-lg-4 mt-3 mt-lg-0'>
          <h5 className='mb-4'><b>Metode Pembayaran</b></h5>
          <img src={PaymentImg} alt="Payment Arkademi" />
        </div>

        {/* Follow me and Arkademi mobile */}
        <div className='col-lg-3 mt-4 mt-lg-0'>
          <div>
            <h5 className='mb-4'><b>Ikuti Kami</b></h5>
            <img src={MedsosImg} alt="Media Sosial Arkademi" />
          </div>
          <div className='mt-3'>
            <h5 className='mb-4'><b>Arkademi Mobile App</b></h5>
            <img src={DownloadAppImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer