import React,{useEffect, useState} from 'react'
import './BrandNav.css';
import Brands from '../Assests/Brands.svg'
import brands from './brand_data'
function BrandNav({pathName}) {

    const [datas, setData] = useState(brands);
    useEffect(()=>{
        if(pathName=== '/cart'){
            setData([{name: "Cart"}])
        }
    },[])
    return (
        
        <div className={`${pathName === '/cart'?'brandNavCart':`brandNav`}`}>
            {pathName !== '/cart' && <img src={Brands} className="brand_img" height="30px"/>}
            {pathName === '/cart' && <p className="brand_name brand_img">Home</p>}
            {
                datas.map(data => (
                    <p className="brand_name">{data.name}</p>
                ))
            }
            
        </div>
    )
}

export default BrandNav
