import React ,{useState, useEffect} from 'react'
import '../post/Post.css'
import Button from '@mui/material/Button';
import axios from "axios"


const Post = () => {
  const [products, setProducts] = useState([])
  const [decription, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [rate, setRate] = useState('')
  const [count, setCount] = useState('')
  const [image , setImage] = useState('')

  const getData = async()=>{
    const response = await axios.get("http://localhost:5000/products")
    console.log(response?.data);
    setProducts(response?.data)
  }
  const addData = async(e) =>{
    e.preventDefault()
    try{
      const response = await axios.post("http://localhost:5000/products",{
        decription: decription,
        price: price,
        category: category,
        rate: rate,
        count: count,
        image: image}
      )
      console.log(response);
      getData()
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getData()
   },[])
 

  return (
    <div>
    <h3 className='productPost'>Here you can add new products to the data. For this , fill the inputs with the necessary information</h3>
     <div className='inputBox'>
      <form>
        <input type="text" id='1' placeholder='Description' value={decription}  onChange={(e) => setDescription(e.target.value)} />
        <br />
        <input type="text" id='2' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)}/>
        <br />
        <input type="text" id='3' placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)}/>
        <br />
        <input type="text" id='4' placeholder='Rate' value={rate} onChange={(e) => setRate(e.target.value)}/>
        <br />
        <input type="text" id='5'  placeholder='Count'value={count} onChange={(e) => setCount(e.target.value)}/>
        <br/>
        <input type="text" id='6'  placeholder='imageUrl' value={image} onChange={(e) => setImage(e.target.value)}/>
      </form>
       <div className='addBox'>
         <Button variant="outlined" type="submit" onClick={addData}>Add Product</Button>
       </div>
     </div>
   </div>
  )
}

export default Post