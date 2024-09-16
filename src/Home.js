import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home' >
      <div className='home__container'>
<img classname = "home__image" src = 'https://m.media-amazon.com/images/I/614HmE60cyL._SX3000_.jpg' className='home__image' alt='amazon-banner' />
<div className='home__row'>
<Product 
  id = "12321341"
  title="The Lean Startup" 
  price={19.99} 
  rating={3} 
  image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg" 
/>

    <Product 
    id = "12321342"
    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
    price={239.0}
    rating={4}
    image="https://m.media-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
    />
    </div>

    <div className='home__row'>
    <Product 
    id = "12321343"
    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
    price={199.99}
    rating={3}
    image="https://m.media-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
    />
    <Product
    id = "12321344" 
    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
    price={98.99}
    rating={5}
    image="https://m.media-amazon.com/images/I/61b4qFTXRML._AC_UY218_.jpg"
    />  
    <Product
    id = "12321345" 
    title = "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
    price={598.99}
    rating={4}
    image="https://m.media-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
    />
    </div>

    <div className='home__row'>
    <Product 
    id = "12321346"
    title= 'Samsung LC49RG90SSUXEN 49" Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x1440'
    price={1094.98}
    rating={4}
    image="https://m.media-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
    />
        </div>

       </div> 
    </div>


  )
}

export default Home
