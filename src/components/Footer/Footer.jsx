import React from 'react'
import './Footer.sass'

function Footer() {
  return (
      <div className='footer'>
        <div className='small-banner'></div>
        <div className='big-banner'>
          <nav className='footer-nav'>
              <img className='footer-logo'src="assets/png/logo-footer.png" alt="logo-acme-footer" />
              <p className='copyright'>© All right reserved 2020</p>
          </nav>
        </div>
      </div>
  )
}

export default Footer