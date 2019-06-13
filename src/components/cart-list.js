import React, {Component} from 'react';
import Product from './product.js';
import ajaxHOC from './ajaxHOC.js';
import { withTranslation } from 'react-i18next';

const CartComp = (props)=> {
        return (
            <div>
                {props.t('countLabel')} :
                {
                    props.list.map((item, i)=> {
                        return <Product item={item} key={i}/>
                    })
                }
            </div>
        )  
}
const CartList = ajaxHOC(CartComp, 'http://localhost:3000/cartList');
export default withTranslation()(CartList)