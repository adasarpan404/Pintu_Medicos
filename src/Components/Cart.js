import React, { useContext } from 'react'
import { CartContext } from './cartContext';
import Header from './Header';
import BrandNav from './BrandNav';
function Cart({match}) {
    const [cart, setCart] = useContext(CartContext);
    console.log(cart);
    return (
        <div>
            <Header pathName={match.path}/>
            <BrandNav pathName={match.path} />
            <div>
            {
                cart.map(item =>(
                    <div>
                    <div>{item.name}</div>
                    <img src={`Images/${item.image}`}/>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Cart
