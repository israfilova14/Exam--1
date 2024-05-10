import React, {useEffect, useState} from 'react'
import '../products/Products.css'
import axios from "axios"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Products = () => {
  const [products, setProducts] = useState([])

  const getData = async()=>{
    const response = await axios.get("http://localhost:3000/products")
    console.log(response?.data);
    setProducts(response?.data)
  }

  const deleteData = async(id) =>{
   
    try{
      await axios.delete(`http://localhost:3000/products/${id}`)
      .then(response =>{
        console.log(response);
        if(response.status ===200){
          setProducts(products.filter(element => element.id !==id))
        }
        getData()
      })
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
   getData()
  },[])

  return (
    <div>
      <h1 className='products-title'>Products</h1>
      <section>
      <div className='sortBox'>
        <div className='buttonsBox'>
            <p className='sort-message'>New Arrivals</p>
             <div className='sortBox'>
                 <div className='box-1'>
                    <button className='btn-1'> A to Z by name</button>
                    <button className='btn-2' > Z to A by name</button>
                 </div>
                  <div className='box-2'>
                    <button className='btn-3' >A to Z by price</button>
                    <button className='btn-4' >Z to A by price</button>
                  </div>
                   <div className='box-3'>
                    <button className='btn-5' >A to Z by rating</button>
                    <button className='btn-6' >Z to A by rating</button>
                   </div>
                    <div className='box-4'>
                    <button className='btn-7' >A to Z by count</button>
                    <button className='btn-8' >Z to A by count</button>
                    </div>
             </div>
        </div>
    </div>
      </section>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Id</b></TableCell>
            <TableCell><b>Description</b></TableCell>
            <TableCell><b>Price</b></TableCell>
            <TableCell><b>Category</b></TableCell>
            <TableCell><b>Rate</b></TableCell>
            <TableCell><b>Count</b></TableCell>
            <TableCell><b>Image</b></TableCell>
            <TableCell><b>Delete</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{"$" + row.price}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row?.rating?.rate}</TableCell>
              <TableCell>{row?.rating?.count}</TableCell>
              <TableCell><img src={row.image} alt="" className='productImage' /></TableCell>
              <TableCell><button className='deletebtn'onClick={() =>{deleteData(row.id)}}>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Products