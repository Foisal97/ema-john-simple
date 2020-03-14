import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img,name,price}=props.product;
    return (
        <div className="product">
           <div>
               <img src={img} alt=""></img>
           </div>


           <div>
           <h4 className="productName">{name}</h4>
           <br></br>
           
             <p>sallary:${price}</p>
            <br></br>
           
           <button className="main-button"
           onClick={()=>props.handleAddProduct(props.product)}
           ><FontAwesomeIcon icon={faPlus}/></button>
           </div>
           
        </div>
    );
};

export default Product;