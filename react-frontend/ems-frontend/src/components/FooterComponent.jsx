/* eslint-disable no-unused-vars */
import React from 'react'

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className='footer'>
        <span>Bütün hüquqlar qorunur {currentYear}</span>
      </footer>
    </div>
  )
}

export default FooterComponent