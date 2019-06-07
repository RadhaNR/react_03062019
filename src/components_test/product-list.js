import React, {Component} from 'react';
import Product from './product.js';
import ajaxHoc from './ajaxHoc.js';
const ProductListComp = (props) => {
    return (
            <div>
            Below are the avialable product list:
            {
                props.list.map((product, i) => {
                    return <Product product={product} key={i}/>
                })
            }
            </div>
        )
}
const ProductList = ajaxHoc(ProductListComp, 'http://localhost:3000/productList')
export default ProductList;