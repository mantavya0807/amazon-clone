import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
  const [{ basket,user }, dispatch] = useStateValue()

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://as2.ftcdn.net/v2/jpg/08/10/16/35/1000_F_810163547_OSOrQ5Ssfidfy36gnvLL5u2DKj7P3qZm.jpg'
          alt=''
        />

        <div>
          <h3 className='checkout__name'>Hello, {user?.email}</h3>
          <h2 className='checkout__title'>Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}
export default Checkout
