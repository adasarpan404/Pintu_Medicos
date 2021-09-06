import React from 'react'

import Group_2 from '../Assests/Group_2.svg'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import './Header.css'
import { Link } from 'react-router-dom'
function Header({pathName}) {
    
    return (
        <div className="header"> 
           <img src={Group_2} className="plus" height="106px" />
           {pathName !== '/cart' || pathName=='/me' &&
           <div className="search_bar">
           <BsSearch className={`search_icon`}/>
           <input className="search_medicine" placeholder="search for medicine and brands"/>
           </div>
           }
           <Link to={`/cart`} className="cart_txt">
           <div className={`cart ${pathName === '/me' || pathName === '/cart' ? 'move_left': null} ${pathName === '/cart' ? 'white_line': null}`}>
           
           <AiOutlineShoppingCart color="#ffffff" className={`cart_icon  `} />
           <div>Cart</div>
           
           </div>
           </Link>
           <Link to={`/Me`} className="profile_txt">
            <div className={`profile ${pathName === '/me' ? 'white_line': null}`}><CgProfile color="#ffffff" className={`profile_icon`} />
           <div>My Account</div></div>
           </Link>
           
        </div>
    )
}

export default Header
