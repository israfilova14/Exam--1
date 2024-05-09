 
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./page/home/Home"
import Products from "./page/products/Products"
import Post from "./page/post/Post"
import Header from "./layout/Header"
import Login from './page/login/Login.jsx'
import Wishlist from './page/wishlist/Wishlist.jsx'

function App() {
  

  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/post' element={<Post/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
    </Routes>
    </>
  )
}

export default App
