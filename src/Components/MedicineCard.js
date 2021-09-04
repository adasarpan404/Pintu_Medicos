import React, { useContext } from 'react'
import { CartContext } from './cartContext';
import './MedicineCard.css'
function MedicineCard({name, price, quantity, image}) {
    const [cart, setCart] = useContext(CartContext);
    const addToCart = e => {
        e.preventDefault();
        setCart(prevCart =>[...prevCart, {name, price, quantity, image}])
    }
    return (
        <div className="medicineCard">
        <div className="image_container">
            <img src={`Images/${image}`} className="medicine_image"/>
            </div>
            <div className="medecine_text_container">
            <div className="name_txt">
            {name}</div>
          
            <div className="quantity_txt">
           Quantity available: {quantity}</div>
           <div className="price">
           ₹{price}</div>
        </div>
        <button className="addToCart_btn" onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default MedicineCard
