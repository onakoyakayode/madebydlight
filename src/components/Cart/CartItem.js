import React from 'react'
import { UilAngleUp,  UilAngleDown } from '@iconscout/react-unicons'
import '../../Styles/CartItem.css'
import { Button } from '../../Styled/Button.styled'
import { removeItem, increase, decrease } from '../../Features/Cart/CartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({id, img, title, price, amount}) => {

    const dispatch = useDispatch();
  return (
    <div className='cart-item'>
        <div className='cart-container'>
            <div className='cart-display'>
                <div className='cart-display-flex'>
                    <div className='cart-item-img'>
                        <img src={img} alt={title} />
                    </div>
                    <div className='cart-item-title'>
                        <h4>{title}</h4>
                        <h4 className='item-price'>₦{price}</h4>
                        <Button className='rmv-btn' onClick={() => dispatch(removeItem(id))}>remove</Button>
                    </div>
                </div>
                <div className='amount-display'>
                    {/*Increase Amount*/}
                    <Button className='amt-btn' onClick={() => {dispatch(increase({ id }))}}>
                        <UilAngleUp />
                    </Button>
                    {/* amount */}
                    <p className='amount'>{amount}</p>
                    {/* Decrease Amount */}
                    <Button className='amt-btn' onClick={() =>{
                        if (amount === 1) {
                            dispatch(removeItem(id))
                            return;
                        }
                        dispatch(decrease({ id }))}}>
                        <UilAngleDown />
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem;
