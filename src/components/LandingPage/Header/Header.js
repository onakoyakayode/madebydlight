import React from 'react'
import { Button } from '../../../Styled/Button.styled'
import { HeaderStyled } from '../../../Styled/Header.styled';
import { UilAngleDown, UilArrowRight, UilArrowLeft, UilInstagram, UilTwitter, UilFacebookF, UilWhatsapp} from '@iconscout/react-unicons'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <HeaderStyled>
            <div className='header-1'>
                <img src="https://images.pexels.com/photos/2230796/pexels-photo-2230796.jpeg?auto=compress&cs=tinysrgb&w=800" alt='' />
                {/* <img src='https://d2b660f19df03710.demo.carrd.co/assets/images/image02.jpg?v=84727e14' alt=''/> */}
            </div>
            <div className='header-2'>
                <h2 className='header-2-title animate__animated animate__pulse'>
                    MadeBy'Dlight
                </h2>
                <p>Everyone deserves to look their best, and that's why we are here to help you produce the outfit that suite your taste.</p>
                <Link to='/main'>
                    <Button className='animate__animated animate__fadeInUp'
                        gap="10px">
                        Get Started
                        <UilAngleDown className="icon" />
                    </Button>
                </Link>
            </div>
        </HeaderStyled>
        <HeaderStyled>
            <div className='header-2 female'>
                <h2 className='header-2-title female-text animate__animated animate__pulse'>
                    Women's
                </h2>
                <p>Look Good, Feel Comfortable - Get Dressed In MadeBy'Dlight.</p>
                <Button className='female-btn'
                    gap="15px">
                    Check it out
                    <UilArrowRight className="icon" />
                </Button>
            </div>
            <div className='header-1'>
                <img src="https://i.pinimg.com/564x/63/b6/15/63b615f03ab8d73194f101f99a5a3f63.jpg" alt='women style' />
            </div>
        </HeaderStyled>
        <HeaderStyled>
            <div className='header-1'>
                <img src="https://images.pexels.com/photos/4513813/pexels-photo-4513813.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt='accessories' />
            </div>
            <div className='header-2'>
                <h2 className='header-2-title female-text animate__animated animate__pulse'>
                    Accessories
                </h2>
                <p>Everyone deserves to look their best, and that's why we are here to help you produce the outfit that suite your taste.</p>
                <Button className='female-btn'
                    gap="15px">
                    Coming Soon
                    <UilArrowLeft className="icon" />
                </Button>
            </div>
        </HeaderStyled>
        <HeaderStyled>
            <div className='header-2 female'>
                <h2 className='header-2-title female-text animate__animated animate__pulse'>
                    Men's
                </h2>
                <p>Everyone deserves to look their best, Get Styled with the Best Unisex Outfits - MadeBy'Dlight</p>
                <Button className='female-btn'
                    gap="15px">
                    Coming Soon
                    <UilArrowRight className="icon" />
                </Button>
            </div>
            <div className='header-1'>
                <img src="https://images.pexels.com/photos/6109509/pexels-photo-6109509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='men style' />
            </div>
        </HeaderStyled>
        <HeaderStyled>
            <div className='header-1'>
                <img src="https://d2b660f19df03710.demo.carrd.co/assets/images/image05.jpg?v=84727e14" alt='accessories' />
            </div>
            <div className='header-2 female contact'>
                <h2 className='header-2-title female-text contact-text animate__animated animate__pulse'>
                    Contact
                </h2>
                <p>Everyone deserves to look their best, and that's why we are here to help you produce the outfit that suite your taste.</p>
                <ul className='social-item flex'>
                    <li><a href='https://google.com' className='social-link'><UilInstagram className="social-icon"/></a></li>
                    <li><a href='https://google.com' className='social-link'><UilTwitter className="social-icon"/></a></li>
                    <li><a href='https://google.com' className='social-link'><UilFacebookF className="social-icon"/></a></li>
                    <li><a href='https://google.com' className='social-link'><UilWhatsapp className="social-icon"/></a></li>
                </ul>
            </div>
        </HeaderStyled>
    </>
  )
}

export default Header
