import React from 'react';
import { Link } from 'react-router-dom';
import products from './products';
import './productScreen.css'
import Rating from '../Rating/Rating';
import Product from './Product';

const ProductScreen = () => {
    return (
        <main>
            <h1 className='head'>Latest Products</h1>
            <div className="ui items row center">
                {products.map(product => (
                    <Product product = {product} />
                ))}
            </div>
        </main>
    );
}

export default ProductScreen;