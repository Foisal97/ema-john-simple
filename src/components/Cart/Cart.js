import React from 'react';

const Cart = (props) => {
    const cart=props.cart;

    let total=0;
    for(let i=0;i<cart.length;i++)
    {
        const product=cart[i];
        total=total+product.price;
    }
    
    return (
        <div>
          <h4>List</h4>
           <p>Added Friends:{cart.length}</p>
           <p>total sallary:{total}</p>
        </div>
    );
};

export default Cart;