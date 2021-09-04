
import React, { createContext, useState } from 'react'
export const CartContext = createContext();
export const CartProvider = props => {
    const [cart, setCart] = useState([{
        name: 'Haslab Alfa-Ag With Ashwagandha and Ginseng Tonic 100 ml',
        price: 230, 
        quantity: 230,
        image: 'medicine.jpg'
    },{
        name: 'Haslab Alfa-Ag With Ashwagandha and Ginseng Tonic 100 ml',
        price: 230, 
        quantity: 230,
        image: 'medicine.jpg'
    }]);


    return(
        <CartContext.Provider value={[cart, setCart]}>
        {props.children}
        </CartContext.Provider>
    );
}