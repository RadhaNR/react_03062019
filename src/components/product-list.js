import React, {Component} from 'react';
import Product from './product.js';
import ajaxHOC from './ajaxHOC.js';
import {withRouter} from 'react-router-dom';
import { withTranslation } from 'react-i18next';

class ProductComp extends Component {
    
    redirect = () => {
        this.props.history.push('/first');
    }
    render() {
        return (
            <div>
                <button onClick={this.redirect}>Redirect</button>
                {this.props.t('countLabel')} :
                {
                    this.props.list.map((item, i) => {
                        return <Product item={item} key={i}/>
                    })
                }
            </div>
        )
    }

}
const ProductList = ajaxHOC(ProductComp, 'http://localhost:4000/productList');
export default withTranslation()(withRouter(ProductList));

