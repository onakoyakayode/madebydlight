import { CartItems } from '../CartItems';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}


export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
    return CartItems;
})



const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem : (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) =>
            item.id !== itemId)
        },
        increase : ( state, { payload }) => {
            const cartItem = state.cartItems.find((item) =>
            item.id === payload.id)
            cartItem.amount = cartItem.amount + 1;
        },
        decrease : ( state, { payload }) => {
            const cartItem = state.cartItems.find((item) =>
            item.id === payload.id)
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.price * item.amount;
                
            });

            state.amount = amount;
            state.total = total;   
        },
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
        }

    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false
        },
    },
});

export const {clearCart, removeItem, increase, decrease, calculateTotals, addToCart} = CartSlice.actions;

export default CartSlice.reducer;
