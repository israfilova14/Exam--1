import React ,{useState, useEffect} from 'react'
import "../wishlist/Wishlist.css"
import axios from "axios"
import {useParams} from "react-router-dom"
 
const Wishlist = () => {
    const [products, setProducts] = useState([])
    const {productId} = useParams()

    const getProducts = async() =>{
        const response = await axios.get("http://localhost:5000/products" + productId)
         console.log(response?.data);
         setProducts(response?.data)
         console.log(response?.data?.price);
    }
    useEffect(()=>{
     getProducts()
    },[])

  return (
    <div>
        <h2 className='wishlist-title'>Here are your favorite products!</h2>
        <div>
            <p>{products.image}</p>
        </div>
    </div>
  )
}

export default Wishlist