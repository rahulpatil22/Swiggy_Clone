import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RestaurantItemList from './RestaurantItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

   // never subcribe the whole store , it make performace down
    // const store = useSelector((store)=>store);
    // const cartItems = store.cart.items;

    // read cartData - subscribe to store using useSelector - only subscribe to specific portion of store
    //RTK uses Immerjs behind the scene
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());

    }

    // reusability of component-RestaurantList
  return (
    <div className='text-center m-5 p-5'>
     <h1 className='text-2xl font-bold'>Cart</h1> 
     <div className='w-6/12 m-auto'>
     <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length ==0 && <h1>Cart is empty, Add Items to the Cart !</h1>} <RestaurantItemList items={cartItems}/>
     </div>
    
    </div>
  )
}

export default Cart
