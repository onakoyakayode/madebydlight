import React from 'react'
import { motion,} from 'framer-motion'
import Navbar from '../Main/Navbar/Navbar'
import Footer from '../Footer/Footer'
import "../../Styles/Designer.css"

const Desinger = () => {
  return (
    <>
    <Navbar />
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}>
            
            <div className='designer-container'>
                <div className='designer-header'>
                    <div className='designer-header-img'>
                        <img src="https://images.pexels.com/photos/1126727/pexels-photo-1126727.jpeg?auto=compress&cs=tinysrgb&w=800" alt="designer" />
                    </div>
                    <div className='designer-header-title'>
                        <h3 className='animate__animated animate__fadeInRight animate__delay-1s'>Doyin Adewale</h3>
                        <div className='break'></div>
                        <p className='animate__animated animate__fadeInUp animate__delay-2s'>Fashion Designer</p>
                        <div className='designer-body-text animate__animated animate__fadeInUp animate__delay-3s'>
                            <p>A creative professional who designs clothing and accessories for consumers. I use my expertise in fabrics, textiles and color to create unique and stylish pieces that reflect current trends and cultural influences. I have a strong understanding of body types, fashion history, and current styles, as well as an eye for detail and proportion.</p>
                        </div>
                        <ul className='designer-body-quality'>
                            <li>Creativity and Imagination</li>
                            <li>Knowledge of fabrics, textiles, and color.</li>
                            <li>understanding of current fashion trends and Cultural influences</li>
                            <li>Ability to sketch designs and create prototypes</li>
                            <li>Attention to detail and proportion</li>
                            <li>Business Acumen</li>
                            <li>Communication and collaboration skills</li>
                            <li>Adaptability and willingness to learn</li>
                            <li>Technical proficiency in design and pattern-making</li>
                            <li>Ability to bring designs to life through execution and production</li>
                        </ul>
                        <div className='designer-motto'>
                            <h2>“Unleashing the beauty in simplicity”</h2>
                        </div>
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
                <div className='designer-story'>
                    <div className='story-et'>
                        <h2>My Story</h2>
                        <div className='break'></div>
                        <p>How i transited from a job seeker to a full time fashion designer, within a stipulated time.</p>
                    </div>
                </div>
                <div className='designer-intro'>
                    <div className='designer-intro-container'>
                        <div className='designer-intro-text'>
                            <p>As a young lady named Adedoyin always had passion for fashion and design. Adedoyin studied at a prestigious design school and honed her skills by interning at several top fashion houses. After graduation, Adedoyin started her own label, focusing on sustainable and ethical fashion practices. Her unique designs quickly gained popularity and attracted the attention of fashion industry insiders. Adedoyin's hard work and talent earned her accolades as she continues to inspire others with her commitment to creativity, sustainability, and responsible business practices.</p>
                        </div>
                        <div className='designer-intro-img'>
                            <img src="https://images.pexels.com/photos/756570/pexels-photo-756570.jpeg?auto=compress&cs=tinysrgb&w=800" alt='designer' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </motion.div>
    </>
  )
}

export default Desinger
