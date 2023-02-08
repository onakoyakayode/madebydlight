import React from 'react'
import { Button } from '../../Styled/Button.styled'
import "../../Styles/Modal.css"
import { closeModal } from '../../Features/Modal/ModalSlice'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../Features/Cart/CartSlice'

const Modal = () => {
    const dispatch = useDispatch();
  return (
    <aside className='modal-container'>
        <div className='modal'>
            <h4>Remove all items from your shopping cart?</h4>
            <div className='btn-container'>
                <Button 
                onClick={() => {
                    dispatch(clearCart())
                    dispatch(closeModal())}}
                className='btn-confirm'>Confirm</Button>
                <Button
                onClick={() => dispatch(closeModal()) }
                className='btn-cancel'>Cancel</Button>
            </div>
        </div>
    </aside>
  )
}

export default Modal
