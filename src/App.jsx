import React from 'react'
import { Icon } from '@iconify/react'

// Import helper
import CountdownTimer from './helper/CountDownTimer';

// Import Icon
import IconTrending from './assets/icon/trending.png';
import IconFlashSale from './assets/icon/flashSale.png'

// Import component
import NavbarLanding from "./components/Navbar";
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Spesialis from './components/Spesialis';
import Slider from './components/Slider';
import SelectCategory from './components/SelectCategory';
import SpecialPromo from './components/SpecialPromo';
import TopCategories from './components/TopCategories';
import Institution from './components/Institution';
import Class from './components/Class';
import About from './components/About';
import Testimonial from './components/Testimonial';

function App() {
  document.title = "ARKADEMI | Landing Page"

  const HoursMinsSecs = {hours: 72, minutes: 20, seconds: 59}

  return (
    <div> 
      {/* Component Navbar */}
      <NavbarLanding />

      {/* Component Select Category */}
      <SelectCategory />

      {/* Component Carousel */}
      <div className='my-3'>
        <Carousel />
      </div>

      {/* Component Spesial */}
      <div>
        <Spesialis />
      </div>

      {/* Component Trending */}
      <div className='container my-2'>
        <div className='d-flex align-items-center mb-2'>
          <img src={IconTrending} alt="Icon Trending" />
          <h4 className='m-0 p-0 ms-2 fw-bold'>Trending</h4>
        </div>
        {/* Card Slider */}
        <Slider />
      </div>

      {/* Component Flash Sale */}
      <div className="container my-4">
        <div className="d-block d-lg-flex align-items-center mb-2">
          <div className='d-flex align-items-center mb-2 mb-lg-0'>
            <img src={IconFlashSale} alt="Icon Flash Sale" />
            <h4 className='m-0 p-0 ms-2 fw-bold'>Flash Sale</h4>
          </div>
          <div className='d-flex align-items-center'>
            <p className='text-muted fw-bold m-0 ms-5 ms-lg-3'>Berakhir dalam</p>
            <div className='ms-2 d-flex align-items-center p-2 bg-countdown'>
              <Icon icon="lucide:clock-7" color="#ffffff" width="20" className='me-2' />
              <CountdownTimer HoursMinsSecs={HoursMinsSecs} />
            </div>
          </div>
        </div>

        {/* Card Slider */}
        <Slider />
      </div>


      {/* Component Top Categories */}
      <div>
        <TopCategories />
      </div>

      {/* Component Special Promo */}
      <div>
        <SpecialPromo />
      </div>

      {/* Component Institution */}
      <div>
        <Institution />
      </div>

      {/* Component new */}
      <div className='mt-4'>
        <Class title="Terbaru"/>
      </div>

      {/* Component Bisnis */}
      <div className='mt-4'>
        <Class title="Bisnis"/>
      </div>
      {/* Component Carrier */}
      <div className='mt-4'>
        <Class title="Pengembangan Karir"/>
      </div>

      {/* Component Testimoni */}
      <div className='mb-2 bg-testimonial'>
        <Testimonial />
      </div>

      {/* Component About Arkademi */}
      <div>
        <About />
      </div>

      {/* Horizontal Line */}
      <hr />

      {/* Componet Footer */}
      <div className='my-5'>
        <Footer />
      </div>

      {/* Copyright */}
      <div className='bg-footer'>
          <div className='container '>
            <div className="d-block d-lg-flex justify-content-between">
              <p className='m-0 py-2 text-center text-md-start'>	&copy; 2022 PT. Arkademi Daya Indonesia </p>
              <div className='d-flex py-2 justify-content-center justify-content-md-start'>
                <p className='m-0 me-5 fw-bold'>Kententuan Layanan</p>
                <p className='m-0 fw-bold'>Kontak</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
