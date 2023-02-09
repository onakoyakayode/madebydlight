import React from 'react'
import "../../Styles/Footer.css"
import { UilCalling, UilEnvelopeAlt, UilLocationPinAlt, UilWhatsappAlt,UilInstagram, UilTwitter, UilFacebookF } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer x'>
            <Link to='/'>
                <div className='footer-logo'>
                    <img src='./MadeByDlight.jpeg' alt='Dlight' />
                </div>
            </Link>
            <div className='footer-contact'>
                <p>
                    <UilCalling />
                    <a href='tel:08063707473'>08063707473</a>
                </p>
                <p>
                    <UilEnvelopeAlt />
                    <a href='mailto:onakoyakayode@gmail.com'>Madebydlight@gmail.com</a>
                </p>
                <p>
                    <UilLocationPinAlt />
                    <a href='https://goo.gl/maps/hEbHatV5TqV2h2kv8'>Bishop Shopping Complex, Ring road, Ibadan, Nigeria.</a>
                </p>
                {/* <p>
                    
                    <a href='#'>08063707473</a>
                </p>
                <p>
                    
                    <a href='#'>MadeBy'Dlight</a>
                </p>
                <p>
                    
                    <a href='#'>MadeBy'Dlight</a>
                </p> */}
            </div>
        </div>
        <div className='footer y'>
            <h3>LINKS</h3>
            <ul>
                <li>Accessories</li>
                <li>Men's</li>
                <li>Women's</li>
                <li>Gallery</li>
            </ul>
        </div>
        <div className='footer z'>
            <h3>FOLLOW US</h3>
            <ul>
                <li><a href='tel:08063707473'><UilWhatsappAlt className="icons"/></a></li>
                <li><a href='https://twitter.com'><UilTwitter /></a></li>
                <li><a href='https://instagram.com'><UilInstagram /></a></li>
                <li><a href='https://facebook.com'><UilFacebookF/></a></li>
            </ul>
        </div>
      </div>
      <div className='footer-dev'>
        <h4 className='dev'>Designed by <a target="_blank" rel="noreferrer" href='https://github.com/onakoyakayode'>Onakoya Kayode</a></h4>
        <small className='copyright'>&copy; 2023</small>
      </div>
    </footer>
  )
}

export default Footer
