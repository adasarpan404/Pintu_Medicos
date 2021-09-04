import React,{useState} from 'react'
import './Body.css'
import categories from './Category'
import MedicineCard from './MedicineCard'
import Medicine from './medicineList'
function Body() {
    const [category, setCategory] = useState(categories);
    const [medicine, setMedicine] = useState(Medicine);
    return (
        <div className="main">
            {
                category.map(item=>(
                    <div className="body_container">
                    <div className="category_heading">
                       { item.category}<p className="view_all">view all</p>
                    </div>
                       <div className="category_content">
                    {
                        medicine.slice(0,5).map(medicineItem=>(
                            <MedicineCard name={medicineItem.name} price={medicineItem.price} quantity={medicineItem.quantity} image={medicineItem.image}/>
                        ))
                    }
                    </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Body
