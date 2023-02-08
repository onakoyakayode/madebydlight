import React, { useState } from 'react'
import Navbar from "../Main/Navbar/Navbar"
import Footer from "../Footer/Footer"
import { motion,} from 'framer-motion'
import "../../Styles/Gallery.css"
import { Image } from '../../Images/Image'
import {Button} from '../../Styled/Button.styled'
import { UilAngleRightB,  UilAngleLeftB, UilTimesSquare  } from '@iconscout/react-unicons'


const Gallery = () => {

    const [data, setData] = useState({img: '' , i: 0})


    function imgAction(action) {
        let i = data.i;
        if(action === 'next-img') {
            setData({img: Image[i + 1], i: i + 1})
        }
        if(action === 'prev-img') {
            setData({img: Image[i - 1], i: i - 1})
        }
        if(!action) {
            setData({img: "", i: 0})
        }
    }


    const viewImage = (img, i) => {
        setData({img, i})
        console.log({img, i})
    }


  return (
    <>
    <Navbar />
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}>
        
        <div className='gallery'>
            <div className='gallery-container'>
                <div className='gallery-header'>
                    <h2 className="animate__animated animate__fadeInLeft">Gallery</h2>
                    <div className='break'></div>
                    <p className="animate__animated animate__fadeInUp animate__delay-1s">Fashion is very important. It is life-enhancing and, like everything that gives pleasure, it is worth doing well.</p>
                </div>
            </div>
            <div className='gallery-grid'>
                <div className='gallery-grid-img'>
                {Image.map((image, i) => (
                    <div className={image.className}>
                        <img 
                            key={i}
                            src={image.link}
                            alt={image.alt}
                            onClick={() => viewImage(image, i)}
                            className="animate__animated animate__fadeInUp animate__delay-2s"
                        />
                    </div>
                    ))}
                    
                </div>
            </div>
            {data.img && 
                <div className='view-img'>
                    <button onClick={() => setData(!data)} className='img-btn'>
                        <UilTimesSquare />
                    </button>
                    <Button 
                        onClick={() => imgAction('prev-img')}
                        className='scroll-btn'
                    >
                        < UilAngleLeftB  />
                    </Button>
                    <img src={data.img.link} alt={data.alt}/>
                    <Button 
                        className='scroll-btn'
                        onClick={() => imgAction('next-img')}
                    >
                        <UilAngleRightB />
                    </Button>
                </div>
            }
        </div>
        <Footer />
    </motion.div>
    </>
  )
}

export default Gallery
