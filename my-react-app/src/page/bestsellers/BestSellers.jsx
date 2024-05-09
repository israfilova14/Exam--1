import React, {useEffect, useState} from 'react'
import axios from "axios"

const BestSellers = () => {
  const[bestSellers, getSellers] = useState([])
  const getBestSellers = async() =>{
    const res =  await axios.get("http://localhost:3000/bestsellers")
    console.log(res?.data);
    getSellers(res?.data);
  }

  useEffect(()=>{
   getBestSellers()
  },[])

  return (
    <div className='bestSellers'>
        <div className='products-box'>
            {
                bestSellers.map(item => (
                     <div className='product-box' key={item.id}>
                         <img src={item.image} alt="" />
                        <p className='card-description'>{item.description}</p>
                        <p className='product-price'>{"$" + item.price}</p>
                        <button className='addButton'>ADD TO CARD</button>
                     </div>
                ))
            }
        </div>
    </div>
  )
}

export default BestSellers