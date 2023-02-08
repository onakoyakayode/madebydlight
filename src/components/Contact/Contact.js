import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../Main/Navbar/Navbar'
import Footer from '../Footer/Footer'
import "../../Styles/Contact.css"
import { Button } from '../../Styled/Button.styled'

const Contact = () => {
  return (
    <>
    <Navbar />
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.1 }}>
        
        <div className='contact'>
            <div className='contact-header'>
                <div className='contact-x contact-header-text'>
                    <div className='contact-header-intro'>
                        <h1 className='animate__animated animate__fadeInDown'>Contact Us</h1>
                        <div className='break'></div>
                        <p className='animate__animated animate__fadeInUp'>We would love to hear from you! If you have any questions or comments, please feel free to get in touch with us.</p>
                    </div>
                </div>
                <div className='contact-header-contact contact-x'>
                    <div className='contact-y'>
                        <div className='contact-y-1 contact-box animate__animated animate__fadeInUp'>
                            <h3>BUSINESS</h3>
                            <p>No 4, Jigawa Street, Off ring road, Ibadan, Oyo state.</p>
                            <a href='tel:08063707473'>080639203894</a>
                        </div>
                        <div className='contact-y-2 contact-box animate__animated animate__fadeInUp animate__delay-1s'>
                            <h3>E-mail</h3>
                            <p>Alternatively, you can reach us by email:</p>
                            <a href='mailto:onakoyakayode@gmail.com'>MadeBy'Dlight@gmail.com</a>
                        </div>
                        <div className='contact-y-3 contact-box animate__animated animate__fadeInUp animate__delay-2s'>
                            <h3>Jobs</h3>
                            <p>Want to join our us?
                                <br/>Click the link below.
                            </p>
                            <a href='mailto:onakoyakayode@gmail.com?Subject=Fashion Designer'>MadeBy'Dlight@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact-map'>
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.458103064233!2d3.8619224254294227!3d7.363289514768694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398c4c5f909bf7%3A0x53814306adf9a455!2sOluyole%20200273%2C%20Ibadan%2C%20Oyo!5e0!3m2!1sen!2sng!4v1675265465749!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                </div>
            </div>
            <div className='contact-x'>
                <div className='let-talk'>
                    <h3>Let's Talk</h3>
                    <div className='break'></div>
                    <p>Hi! How can I help you with fashion design today?</p>
                </div>
                <div className='contact-form'>
                    <form className='form'>
                        <div className='form-name flex'>
                            <input type='text' name="firstName" id="firstname" placeholder='First Name' />
                            <input type='text' name="lastName" id="lastname" placeholder='Last Name' />
                        </div>
                        <div className='form-phone-email flex'>
                            <input type="email" name='email' id="email" placeholder='Email Address' />
                            <input type="tel" name="phone-num" id="phoneNum" placeholder="Phone Number" />
                        </div>
                        <div className='form-message'>
                            <textarea name="message" id="message" placeholder="Message" col="30"/>
                        </div>
                        <Button className='form-btn'>SEND MESSAGE</Button>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </motion.div>
    </>
  )
}

export default Contact
