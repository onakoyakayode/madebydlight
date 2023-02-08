import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import CartItem from './CartItem'
import Navbar from '../Main/Navbar/Navbar'
import { useDispatch,useSelector } from 'react-redux';
import { Button } from '../../Styled/Button.styled';
import "../../Styles/CartContainer.css"
import { getCartItems } from '../../Features/Cart/CartSlice';
import Modal from '../Modal/Modal';
import { openModal } from '../../Features/Modal/ModalSlice';



const CartContainer = () => {
    const {isOpen} = useSelector((store) => store.modal)
    const dispatch = useDispatch();

    const { cartItems, amount, total, isLoading} = useSelector((store) => store.cart);


    useEffect(() => {
        dispatch(getCartItems());
    }, [])

    if(isLoading) {
        return (
            <div className='loading'>
                <h1>Loading.....</h1>
            </div>
        )
    }

    if(amount < 1) {
        return (
            <>
            <Navbar />
            <section className='cart-container'>
                <header className='cart-header'>
                    <h2>Your Cart</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
            </>
        )
    }

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.1 }}>
        <Navbar />
        <section className='cart-container'>
            <header className='cart-header'>
                <h2>Your Cart</h2>
            </header>
            <div className='cart-items-display'>
                <div>
                    {cartItems.map((item) => {
                        return <CartItem key={item.id} {...item} />
                    })}
                </div>
                <div className='cart-footer'>
                    <div className='cart-total'>
                        <hr/>
                        <h4>Total <span>₦{total}</span></h4>
                    </div>
                    {/* <Button className='btn clear-btn' onClick={() => dispatch(clearCart())}>Clear Cart</Button> */}
                    <Button className='btn clear-btn' onClick={() => dispatch(openModal())}>Clear Cart</Button>
                </div>
            </div>
            {isOpen && <Modal/>}
        </section>
    </motion.div>
  )
}

export default CartContainer
