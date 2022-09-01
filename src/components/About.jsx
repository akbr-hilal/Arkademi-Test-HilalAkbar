import React from 'react'

import Img from '../assets/img-about.png'
import Logo from '../assets/logo/logo-blue.png'
import mox from '../assets/akselerator/mox.png'
import aws from '../assets/akselerator/aws.png'
import yCombinator from '../assets/akselerator/y-combinator.png'
import googleStartups from '../assets/akselerator/google-startup.png'

function About() {
  return (
    <div className='container'>
      <div className="d-block d-md-flex align-items-center">
        <div className='me-4 d-flex d-lg-block justify-content-center justify-content-lg-start'>
          <img src={Img} alt="img icon about" className='img-about'/>
        </div>
        <div>
          <img src={Logo} alt="logo" />
          <p className='m-0 mt-3' style={{ fontSize: '14px', textAlign: 'justify' }}>
            Arkademi adalah massive open online course (MOOC) platform karya anak bangsa Indonesia. Pembelajaran di Arkademi dikhususkan untuk skill based learning atau pembelajaran berbasis keahlian yang diantarkan melalui kelas belajar dan kursus online melalui aplikasi Arkademi berbasis mobile app dan web. Di Arkademi setiap individu dan lembaga kursus dapat membuka dan mengkomersialkan kelas onlinenya dan menjangkau siswa dari seluruh Indonesia.
          </p>
          <h5 className="fw-bold mt-4">Akselerator</h5>
          <p className='m-0 mt-3' style={{ fontSize: '14px', textAlign: 'justify' }}>
            Arkademi adalah bagian program inkubasi dan akselerator dari perusahaan top-level dunia: SOSV MOX (Mobile Only Accelerator), Amazon Web Service (Edstart Program) dan Y Combinator (Startup School) yang dipilih dari tech startup edukasi terbaik dunia.
          </p>
          <div className='d-flex mt-3 about'>
            <img src={mox} alt="" height='24px' className='me-4'/>
            <img src={yCombinator} alt="" height='24px' className='me-4'/>
            <img src={aws} alt="" height='24px'className='me-4'/>
            <img src={googleStartups} alt="" height='24px' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About