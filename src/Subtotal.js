import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const getBasketTotal = (basket)?.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className='subtotal'>
      <CurrencyFormat
      renderText={(value) => (
        <>
          <p>
            Subtotal ( {basket?.length} items): <strong>{value }</strong>
          </p>
          <small className='subtotal__gift'>
            <input type='checkbox' /> This order contains a gift
          </small>
        </>
      )}
        decimalScale={2}
        value={getBasketTotal}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />
        
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
