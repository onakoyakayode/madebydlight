import React from 'react'
import { Button } from '../../Styled/Button.styled'
import "../../Styles/ShopCart.css"
// import { useDispatch } from 'react-redux'
// import { addToCart } from '../../Features/Cart/CartSlice'

const ShopCart = ({ id, img, title, price, item }) => {

    // const dispatch = useDispatch();

    // const handleAddToCart = (item) => {
    //     dispatch(addToCart(item))
    // }
  return (
    <div className='shopCart'>
        <div className='shopcartBox'>
            <div className='cart-box'>
                <div className='cart-box-img'>
                    <img src={img} alt={title} loading="lazy"/>
                </div>
                <div className='cart-box-price'>
                    <h4>{title}</h4>
                    <h5>₦{ price}</h5>
                </div>
                <Button 
                    // onClick={() => handleAddToCart({item})}
                    className='addToCart-btn'>
                    Add to Cart
                </Button>
            </div>
        </div>
    </div>
  )
}

export default ShopCart
