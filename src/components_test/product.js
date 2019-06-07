import React from 'react';

const Product = (props)=> {
    return (
        <div>
            {props.product.productName} -- {props.product.productId}
        </div>
    )
}

export default Product;