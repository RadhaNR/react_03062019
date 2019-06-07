import React, {Component} from 'react';
import Product from './product.js';
import ajaxHoc from './ajaxHoc.js';
const CartListComp = (props) => {
    return (
            <div>
            Below are the Selected product list:
            {
                props.list.map((product, i)=> {
                    return <Product product={product} key={i} />
                })
            }
            </div>
        )
}
const CartList = ajaxHoc(CartListComp, 'http://localhost:3000/cartList');
export default CartList;