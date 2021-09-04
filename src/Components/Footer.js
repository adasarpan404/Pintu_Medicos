import React, { useState } from "react";
import categories from "./Category";
import brands from "./brand_data";
import "./Footer.css";
function Footer() {
  const [category, setCategory] = useState(categories);
  const [Brands, setBrands] = useState(brands);
  return (
    <section>
      <div className="Footer">
        <div className="footer_leftside">
          <div className="Footer_brand">
            <div className="Footer_brand_head">Popular Brands</div>
            {Brands.slice(0, 6).map((item) => (
              <div className="Footer_brand_item">{item.name}</div>
            ))}
            <div className="all_txt">All</div>
          </div>
          <div className="Footer_category">
            <div className="Footer_category_head">Categories</div>
            {category.map((item) => (
              <div className="Footer_category_item">{item.category}</div>
            ))}
          </div>
        </div>
        <div className="footer_rightside">
         
          <p className="footer_image_heading">Pintu Medicos</p>
            <img
              src={`Images/medical_store.jpg`}
              className="medical_store_image"
            />
            <hr/>
            <p className="footer_address">
              Baldev Ganj Chaurah, Charot Dwar
              <br />
              Kosi Kalan(Mathura)
              </p>
              <ul>
              <li>
              Privacy Policy
              </li>
              <li>
              Terms & Conditions
              </li>
              </ul>
          
        </div>
      </div>
      <div className="copyright_txt">
        &#169; Syntics App Development pvt ltd. All rights reserved
      </div>
    </section>
  );
}

export default Footer;
