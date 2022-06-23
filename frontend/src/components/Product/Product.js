import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import './productScreen.css'

const Product = ({product}) => {
    return (
            <div key={product._id} className="item pp">

                <div className="image">
                    <Link to={`/product/${product._id}`}>
                        <img src={product.image} alt={product.name} />
                    </Link>
                </div>

                <div className="content">
                    <Link to={`/product/${product._id}`}>
                        <div className="header">
                            {product.name}
                        </div>
                    </Link>
                    <div className="rate">
                        <div className="stars">
                            <Rating value={product.rating} />
                        </div>
                        <div className="rating">
                            {product.numReviews} reviews
                        </div>
                    </div>
                    <div className="extra">
                        <span className='price'>${product.price}</span>
                        <span className='stock'>{product.countInStock > 0 ? <span className='Astock'>Available</span> : <span className='Ostock'>Out of Stock</span>}</span>
                    </div>
                </div>
            </div>

     
    )
}

export default Product