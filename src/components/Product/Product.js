import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img,name,seller,price,stock}=props.product;
    return (
        <div className="product">
           <div>
               <img src={img} alt=""></img>
           </div>


           <div>
           <h4 className="productName">{name}</h4>
           <br></br>
           <p><small>by:{seller}</small></p>
            <p>${price}</p>
            <br></br>
           <p><small>Only {stock} left in the stock - order soon</small></p>
           <button className="main-button"
           onClick={()=>props.handleAddProduct(props.product)}
           ><FontAwesomeIcon icon={faShoppingBasket}/>Add to cart</button>
           </div>
           
        </div>
    );
};

export default Product;