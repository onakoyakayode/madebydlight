import React from 'react'
import Navbar from './Navbar/Navbar'
import { motion } from 'framer-motion'
import "../../Styles/Main.css"
import { Button } from '../../Styled/Button.styled'
import { UilArrowRight} from '@iconscout/react-unicons'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'



const Main = () => {

  return (
    <>
    <Navbar />
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.1 }}>
      
      <main>
        <div className='main-header'>
          <div className='main-header-content'>
            <h2 className="animate__animated animate__fadeInLeft">High Fashion</h2>
            <div className='break'></div>
            <p className="animate__animated animate__fadeInUp animate__delay-2s">Fashion you can buy, but style you possess. The key to style is learning who you are, which takes years. There's no how-to road map to style. It's about self expression and, above all, attitude.</p>
            {/* <Button>
              View More
              <UilAngleDown />
            </Button> */}
          </div>
        </div>
        <section className='what-we-do'>
          <div className='what-we-do-flex animate__animated animate__fadeInUp animate__delay-3s'>
            <div className='what-we-do-1'>
              <div className='what-we-do-img'>
                <img src="https://images.pexels.com/photos/13085604/pexels-photo-13085604.jpeg?auto=compress&cs=tinysrgb&w=800" alt="female dress" />
              </div>
            </div>
            <div className='what-we-do-2'>
              <div className='what-we-do-2-text'>
                <h3>What We Do</h3>
                <div className='break'></div>
                <p>What makes a dress beautiful? The woman, of course. And our design process is driven by her. Fabrics that feel good against the skin, hues that she'll have trouble choosing between, fits that bring her confidence.</p>
                <NavLink to='/gallery'>
                  <Button className='what-we-do-btn'>
                    View More
                    <UilArrowRight />
                  </Button>
                </NavLink>
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
                <a href='https://google.com'>
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
                <a href='https://google.com'>
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
                <a href='https://google.com'>
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
                <a href='https://google.com'>
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
        
      </main>
      <Footer />
    </motion.div>
    </>
  )
}

export default Main
