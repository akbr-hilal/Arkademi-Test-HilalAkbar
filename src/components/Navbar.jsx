import React from 'react'
import { Icon } from '@iconify/react';

// Assets
import Logo from '../assets/logo/logo.png'

function NavbarLanding() {
  return (
    <div>
      <div className='nav-landing lg'>
        <div className="container-fluid container-lg">
          <nav className='navbar justify-content-between'>
            <div className='d-lg-flex align-items-center w-100 justify-content-between'>
              <div className='col-2'>
                <img src={Logo} alt="" />
              </div>
              <div className='col-8 pe-5'>
                <input type="search" placeholder='Cari kelas' className='form-control'/>
              </div>
              <div className='col-2 d-flex justify-content-end'>
                  <div className='d-flex align-items-center'>
                    <Icon icon="ic:round-favorite-border" color='white' width='32px' />
                  </div>
                  <div className='ms-2 d-flex'>
                    <button className='btn btn-light me-2'>Masuk</button>
                    <button className='btn btn-primary'>Daftar</button>
                  </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className='nav-landing md'>
        <div className="container-fluid container-lg">
          <nav className='navbar'>
            <div className='d-lg-flex align-items-center w-100'>
              <div className='d-flex'>
                <div className='col-6'>
                  <img src={Logo} alt="" />
                </div>
                <div className='col-6 d-flex justify-content-end'>
                  <div className='d-flex align-items-center me-4'>
                    <Icon icon="ic:round-favorite-border" color='white' width='32px' />
                  </div>
                  <div className="d-flex">
                    <button className='btn btn-light me-2'>Masuk</button>
                    <button className='btn btn-primary'>Daftar</button>
                  </div>
                </div>
              </div>
              <div className='mt-2'>
                <input type="search" placeholder='Cari kelas' className='form-control'/>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavbarLanding