import React, {useEffect, useState} from 'react'
import "../home/Home.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import Component from '../component/Component'
import BestSellers from '../bestsellers/BestSellers'


const Home = () => {
  const[products, setProducts] = useState([])
  const navigate = useNavigate()
 
  
  const getProducts = async() =>{
  const response = await axios.get("http://localhost:3000/products")
   console.log(response?.data);
   setProducts(response?.data)
  }

  const handleChangeDirection =(e) =>{
   e.preventDefault()
     navigate("/wishlist")
  }
  
  useEffect(() =>{
   getProducts()
  },[])

  return (
    <div>
      <section>
        <div className='background'>
           <div className='about-collection'>
            <p>SPRING / SUMMER COLLECTION 2017</p>
            <p className='about-discount'>Get up to 30% Off New Arrivals</p>
            <button className='shopnow-button'>SHOP NOW</button>
           </div>
        </div>
      </section>
      <section>
        <div className='products-categories'>
           <div className='background-1'>
            <button className='button-1'>WOMEN'S</button>
           </div>
           <div className='background-2'>
            <button className='button-2'>ACCESSORIES'S</button>
           </div>
           <div className='background-3'>
            <button className='button-3'>MEN'S</button>
           </div>
        </div>
      </section>
     
      <section>
        <div className='products-box'>
            
              {
                products?.map(item => (
                      <div key={item.id} className='product-box'>
                        <img src={item.image} alt="" />
                        <p className='card-description'>{item.description}</p>
                        <p className='product-price'>{"$" + item.price}</p>
                        <button className='addButton' onClick={handleChangeDirection}>ADD TO CARD</button>
                      </div>
                  ))
              }    
        </div>
      </section>
      <section>
        <Component></Component>
        <BestSellers></BestSellers>
      </section>
    </div>
  )
}

export default Home