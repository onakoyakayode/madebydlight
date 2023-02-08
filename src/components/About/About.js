import React from 'react'
import { motion,} from 'framer-motion'
import Navbar from "../Main/Navbar/Navbar"
import Footer from "../Footer/Footer"
import {Button} from '../../Styled/Button.styled'
import "../../Styles/AboutUs.css"

const About = () => {
  return (
    <>
    <Navbar />
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}>
            
            <div className='about-us'>
                <div className='about-us-header'>
                    <div className='about-us-intro about-us-x'>
                        <h1 className="animate__animated animate__fadeInLeft">About Us</h1>
                        <div className='break'></div>
                        <p className="animate__animated animate__fadeInUp">Our brand, <strong>MadeBy'Dlight</strong>, is dedicated to creating beautiful and functional clothing that celebrates the individuality and confidence of our customers. We believe that fashion should not only look good, but also make you feel good.</p>
                    </div>
                </div>
                <section className='about-us-section-2'>
                    <div className='about-us-x about-x about-img'>
                        <div className='about-x-1'>
                            <p>At the heart of our design philosophy is a commitment to sustainability and ethical production. We source high-quality materials that are sustainable and ethically produced, and we work closely with our suppliers to ensure that they meet our standards.
                                <br/>We are inspired by the creativity and diversity of the world around us, and our designs reflect this. We believe in pushing the boundaries of traditional fashion, and incorporating innovative techniques and materials into our products.
                            </p>
                            <p>
                                Our brand is for women who are not afraid to express their personal style and stand out from the crowd. Our clothing is designed to flatter and celebrate the unique qualities of each woman who wears it, and to make them feel confident and beautiful.
                                We believe in the power of fashion to make a positive impact on the world, and we are dedicated to using our platform to raise awareness about important social and environmental issues. We are proud to support a variety of causes that align with our values, and we strive to make a positive difference in the lives of those around us.
                            </p>
                        </div>
                        <div className='about-x-2 animate__animated animate__fadeInUp animate__delay-1s'>
                            <div className='about-x-img'>
                                <img src='https://images.pexels.com/photos/1757281/pexels-photo-1757281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='about us' />
                            </div>
                        </div>
                    </div>
                    <div className='about-us-x about-y'>
                        <div className='about-y-1'>
                            <div className='about-y-2'>
                                <div className='about-y-2-img'>
                                    <div className='about-y-img'>
                                        <img src='https://images.pexels.com/photos/12934720/pexels-photo-12934720.jpeg?auto=compress&cs=tinysrgb&w=800' alt='trends pic' />
                                    </div>
                                </div>
                            </div>
                            <div className='about-y-3'>
                                <h2>Driving Industry Trends</h2>
                                <div className='break'></div>
                                <p>Our fashion brands are known for pushing the boundaries of traditional design and incorporating new techniques, materials, and technologies into our products.
                                    <br/> Our fashion brand prioritize creating clothing that is not only aesthetically pleasing but also functional for its intended use.</p>
                                <ul className='designer-span et_animated'>
                                    <li className='span-counter'>
                                        <span className='span-title'>Practical</span>
                                        <span className='counter-container'>
                                            <span className='counter-amt' data-width="95%">
                                                <span className='counter-amt-num'></span>
                                                <span className='counter-amt-num-inner'></span>
                                            </span>
                                            <span className='counter-amt-overlay'></span>
                                        </span>
                                    </li>
                                    <li className='span-counter'>
                                        <span className='span-title'>Comfort</span>
                                        <span className='counter-container'>
                                            <span className='counter-amt comfort' data-width="76%">
                                                <span className='counter-amt-num'></span>
                                                <span className='counter-amt-num-inner'></span>
                                            </span>
                                            <span className='counter-amt-overlay'></span>
                                        </span>
                                    </li>
                                    <li className='span-counter'>
                                        <span className='span-title'>Fashion</span>
                                        <span className='counter-container'>
                                            <span className='counter-amt fashion' data-width="65%">
                                                <span className='counter-amt-num'></span>
                                                <span className='counter-amt-num-inner'></span>
                                            </span>
                                            <span className='counter-amt-overlay'></span>
                                        </span>
                                    </li>
                                    <li className='span-counter'>
                                        <span className='span-title'>Research</span>
                                        <span className='counter-container'>
                                            <span className='counter-amt research' data-width="90%">
                                                <span className='counter-amt-num'></span>
                                                <span className='counter-amt-num-inner'></span>
                                            </span>
                                            <span className='counter-amt-overlay'></span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='about-us-x about-z'>
                        <div className='about-z-1'>
                            <div className='about-z-2'>
                                <h2>Sourced from Around the Globe</h2>
                                <div className='break'></div>
                                <p>African fashion has a rich history of traditional garments that vary by region and ethnicity. These styles often feature bold colors, intricate patterns, and unique textiles such as Ankara, Kente cloth, and mud cloth.
                                    <br/>
                                    African fashion is constantly evolving, and many designers are combining traditional elements with contemporary styles to create a unique and innovative look.
                                    <br/>
                                    Sustainability is becoming increasingly important in African fashion, with designers using locally-sourced materials and traditional techniques to create environmentally friendly and ethical collections.
                                </p>
                            </div>
                            <div className='about-z-3'>
                                <div className='about-z-3-img'>
                                    <div className='about-z-img'>
                                        <img src='https://images.pexels.com/photos/12857369/pexels-photo-12857369.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' alt='dress' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section className='et_b summer'>
                    <div className='et_b_row row-1'>
                        <div className='et_b_text_inner'>
                        <h2>Our Collections</h2>
                        <div className='break'></div>
                        </div>
                        <div>
                        <p>Get inspired by these gorgeous, charming and modern fashion website designs. Gitman has been manufacturing the finest shirts and ties in the USA.</p>
                        </div>
                    </div>
                    <div className='et_b_row'>
                        <div className='et_b_column'>
                        <div className='et_b_img'>
                            <a href='#'>
                            <span className='et_b_wrap'>
                                <img src="https://images.pexels.com/photos/1309366/pexels-photo-1309366.jpeg?auto=compress&cs=tinysrgb&w=800" alt='' loading='lazy'/>
                                {/* <span className='et_overlay'><UilLocationArrow className="icon"/></span> */}
                            </span>
                            </a>
                        </div>
                        <div className='et_pb'>
                            <div className='et_pb_text_inner'>
                            <p>Academy Hampton Linen Shirt</p>
                            </div>
                        </div>
                        </div>
                        <div className='et_b_column'>
                        <div className='et_b_img'>
                            <a href='#'>
                            <span className='et_b_wrap'>
                                <img src="https://images.pexels.com/photos/14933925/pexels-photo-14933925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='' loading='lazy'/>
                                {/* <span className='et_overlay'><UilLocationArrow className="icon"/></span> */}
                            </span>
                            </a>
                        </div>
                        <div className='et_pb'>
                            <div className='et_pb_text_inner'>
                            <p>Academy Hampton Linen Shirt</p>
                            </div>
                        </div>
                        </div>
                        <div className='et_b_column'>
                        <div className='et_b_img'>
                            <a href='#'>
                            <span className='et_b_wrap'>
                                <img src="https://images.pexels.com/photos/13722335/pexels-photo-13722335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='' loading='lazy'/>
                                {/* <span className='et_overlay'><UilLocationArrow className="icon"/></span> */}
                            </span>
                            </a>
                        </div>
                        <div className='et_pb'>
                            <div className='et_pb_text_inner'>
                            <p>Academy Hampton Linen Shirt</p>
                            </div>
                        </div>
                        </div>
                        <div className='et_b_column'>
                        <div className='et_b_img'>
                            <a href='#'>
                            <span className='et_b_wrap'>
                                <img src="https://images.pexels.com/photos/5947162/pexels-photo-5947162.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt='' loading='lazy'/>
                                {/* <span className='et_overlay'><UilLocationArrow className="icon"/></span> */}
                            </span>
                            </a>
                        </div>
                        <div className='et_pb'>
                            <div className='et_pb_text_inner'>
                            <p>Academy Hampton Linen Shirt</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
    </motion.div>
    </>
  )
}

export default About
