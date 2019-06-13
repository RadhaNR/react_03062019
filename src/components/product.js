import React, {Component} from 'react';
class Product extends Component {
    render() {
        return (
            <div>
             Product Id: {this.props.item.productId} -  Product Name: {this.props.item.productName}
            </div>
        )
    }
}

export default Product;