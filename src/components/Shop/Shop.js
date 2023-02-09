import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../Main/Navbar/Navbar'
import Footer from '../Footer/Footer'
import "../../Styles/Shop.css"
import { CartItems } from '../../Features/CartItems'
import ShopCart from './ShopCart'

const Shop = () => {
  return (
    <>
    <Navbar />
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.1 }}>
        
        <div className='shop'>
            <div className='shop-header'>
                <div className='shop-x shop-header-text'>
                    <div className='shop-header-intro'>
                        <h1 className='animate__animated animate__fadeInDown'>Our Products</h1>
                        <div className='break'></div>
                        <p className='animate__animated animate__fadeInUp'>We would love to hear from you! If you have any questions or comments, please feel free to get in touch with us.</p>
                    </div>
                </div>
            </div>
            <div className='shop-cart'>
                {CartItems.map((item) => {
                    return <ShopCart key={item.id} {...item} />
                })}
            </div>

        </div>
        <Footer />
    </motion.div>
    </>
    
  )
}

export default Shop
