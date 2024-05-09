import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/colorshop.png"
import "../layout/Header.css"
 

const Header = () => {
  return (
    <div>
        <header>
            <img src={logo} alt="" className='colorshop-logo' />
            <nav>
                <ul>
                   <li>
                         <NavLink to={'/login'} style={{textDecoration: "none", color: "black"}}>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'} style={{textDecoration: "none", color: "black"}}>Home</NavLink>
                    </li>
                    <li>
                       < NavLink to={'/products'} style={{textDecoration: "none", color: "black"}}>Products</NavLink>
                    </li>
                    <li>
                         <NavLink to={'/post'} style={{textDecoration: "none" , color: "black"}}>Post</NavLink>
                    </li>
                    <li>
                         <NavLink to={'/wishlist'} style={{textDecoration: "none" , color: "black"}}>Wishlist</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header